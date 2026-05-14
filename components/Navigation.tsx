"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavNode {
  name: string;
  type: "file" | "folder";
  children?: NavNode[];
  extension?: string;
  href?: string;
}

const NAV_STRUCTURE: NavNode[] = [
  {
    name: "work",
    type: "folder",
    children: [
      { name: "experience.ts",  type: "file", extension: "ts",  href: "experience" },
      { name: "projects.tsx",   type: "file", extension: "tsx", href: "projects"   },
    ],
  },
  {
    name: "life",
    type: "folder",
    children: [
      { name: "diving.tsx",          type: "file", extension: "tsx", href: "dive"           },
      { name: "sustainability.ts",   type: "file", extension: "ts",  href: "sustainability" },
    ],
  },
  { name: "about.me",    type: "file", extension: "me", href: "about"   },
  { name: "contact.ts",  type: "file", extension: "ts", href: "contact" },
];

const EXT_STYLE: Record<string, { color: string; icon: string }> = {
  tsx:     { color: "text-sky-400",     icon: "⚛" },
  ts:      { color: "text-blue-400",    icon: "◆" },
  me:      { color: "text-emerald-400", icon: "◉" },
  default: { color: "text-slate-400",   icon: "◇" },
};

function getExt(ext?: string) {
  return EXT_STYLE[ext ?? "default"] ?? EXT_STYLE.default;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

interface FileItemProps {
  node: NavNode;
  depth: number;
  activeSection: string;
  onNavigate: () => void;
}

function FileItem({ node, depth, activeSection, onNavigate }: FileItemProps) {
  const [open, setOpen] = useState(true);
  const [hovered, setHovered] = useState(false);
  const isFolder = node.type === "folder";
  const isActive = !isFolder && node.href === activeSection;
  const ext = getExt(node.extension);

  function handleClick() {
    if (isFolder) {
      setOpen((o) => !o);
    } else if (node.href) {
      scrollToSection(node.href);
      onNavigate();
    }
  }

  return (
    <div className="select-none">
      <div
        className={cn(
          "group relative flex items-center gap-2 py-1.5 rounded-md cursor-pointer transition-all duration-150",
          hovered && "bg-file-tree-hover",
          isActive && "bg-cyan/10 border-l-2 border-cyan"
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Indent line */}
        {depth > 0 && (
          <div
            className="absolute top-0 bottom-0 w-px bg-border/40"
            style={{ left: `${(depth - 1) * 16 + 16}px` }}
          />
        )}

        {/* Chevron / file dot */}
        <div className={cn(
          "flex items-center justify-center w-4 h-4 transition-transform duration-200",
          isFolder && open && "rotate-90"
        )}>
          {isFolder ? (
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
              className={cn("transition-colors duration-150", hovered ? "text-primary" : "text-muted-foreground")}
            >
              <path d="M1 1L5 4L1 7" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <span className={cn("text-xs", ext.color)}>{ext.icon}</span>
          )}
        </div>

        {/* Folder / file icon */}
        <div className={cn(
          "flex items-center justify-center w-4 h-4 transition-all duration-150",
          isFolder
            ? hovered ? "text-folder-icon scale-110" : "text-folder-icon/70"
            : hovered ? cn(ext.color, "scale-110") : cn(ext.color, "opacity-60")
        )}>
          {isFolder ? (
            <svg width="14" height="12" viewBox="0 0 16 14" fill="currentColor">
              <path d="M1.5 1C0.671573 1 0 1.67157 0 2.5V11.5C0 12.3284 0.671573 13 1.5 13H14.5C15.3284 13 16 12.3284 16 11.5V4.5C16 3.67157 15.3284 3 14.5 3H8L6.5 1H1.5Z" />
            </svg>
          ) : (
            <svg width="11" height="14" viewBox="0 0 14 16" fill="currentColor" opacity="0.8">
              <path d="M1.5 0C0.671573 0 0 0.671573 0 1.5V14.5C0 15.3284 0.671573 16 1.5 16H12.5C13.3284 16 14 15.3284 14 14.5V4.5L9.5 0H1.5Z" />
              <path d="M9 0V4.5H14" fill="currentColor" fillOpacity="0.4" />
            </svg>
          )}
        </div>

        {/* Label */}
        <span className={cn(
          "font-mono text-xs transition-colors duration-150 truncate",
          isActive
            ? "text-cyan font-semibold"
            : isFolder
              ? hovered ? "text-foreground" : "text-foreground/80"
              : hovered ? "text-foreground" : "text-muted-foreground"
        )}>
          {node.name}
        </span>

        {/* Active dot */}
        {isActive && (
          <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
        )}
      </div>

      {/* Children */}
      {isFolder && node.children && (
        <div className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          open ? "opacity-100" : "opacity-0 max-h-0"
        )}
          style={{ maxHeight: open ? `${node.children.length * 200}px` : "0px" }}
        >
          {node.children.map((child) => (
            <FileItem
              key={child.name}
              node={child}
              depth={depth + 1}
              activeSection={activeSection}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track active section
  useEffect(() => {
    const ids = ["experience", "projects", "dive", "sustainability", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <a
        href="#hero"
        onClick={() => setMobileOpen(false)}
        className="flex flex-col px-4 py-5 border-b border-cyan/10 hover:bg-cyan/5 transition-colors duration-150"
      >
        <span className="font-display font-black text-xl text-cyan tracking-tight">KK</span>
        <span className="text-muted-foreground text-[10px] font-mono mt-0.5 tracking-widest uppercase">
          konstantinos.dev
        </span>
      </a>

      {/* Mac dots + explorer label */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-cyan/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <span className="text-[10px] text-muted-foreground font-mono ml-1 tracking-wider">
          explorer
        </span>
      </div>

      {/* File tree */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {NAV_STRUCTURE.map((node) => (
          <FileItem
            key={node.name}
            node={node}
            depth={0}
            activeSection={activeSection}
            onNavigate={() => setMobileOpen(false)}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-cyan/10">
        <p className="text-muted-foreground text-[10px] font-mono">Lausanne · Switzerland</p>
        <p className="text-muted-foreground/50 text-[10px] font-mono mt-0.5">© {new Date().getFullYear()}</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop: always-visible fixed sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-56 z-50 flex-col"
        style={{ background: "var(--color-file-tree-bg)", borderRight: "1px solid rgba(56,189,248,0.1)" }}
      >
        {sidebarContent}
      </aside>

      {/* Mobile: hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 w-9 h-9 flex items-center justify-center rounded-lg bg-ocean-black/90 border border-cyan/20 backdrop-blur-sm"
        aria-label="Open navigation"
      >
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M0 1H16M0 6H16M0 11H16" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Mobile: overlay + drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <aside
            className="relative w-56 h-full flex flex-col z-10"
            style={{ background: "var(--color-file-tree-bg)", borderRight: "1px solid rgba(56,189,248,0.1)" }}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-md hover:bg-cyan/10 transition-colors"
              aria-label="Close navigation"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
