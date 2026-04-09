import React, { useState } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { 
  BarChart3, 
  Users, 
  Settings, 
  CheckSquare, 
  MessageSquare,
  FileText,
  Target,
  Menu,
  X,
  Bell
} from 'lucide-react'
import { cn } from '../lib/utils'

function NavItem({ to, icon: Icon, children, onClick }) {
  const location = useLocation()
  const isActive = location.pathname.startsWith(to) && (to !== '/' || location.pathname === '/')

  return (
    <NavLink
      to={to === '/' ? '/dashboard' : to}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm",
        isActive 
          ? "bg-primary-50 text-primary-700" 
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      )}
    >
      <Icon className={cn("w-5 h-5", isActive ? "text-primary-600" : "text-slate-400")} />
      {children}
    </NavLink>
  )
}

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { to: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { to: '/employees', icon: Users, label: 'Employees' },
    { to: '/feedback', icon: MessageSquare, label: 'Submit Feedback' },
    { to: '/goals', icon: Target, label: 'Goals & Dev' },
    { to: '/admin', icon: Settings, label: 'Admin Panel' },
  ]

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:transform-none flex flex-col",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-primary-600">
            <CheckSquare className="w-6 h-6" />
            <span className="font-bold text-lg text-slate-800 tracking-tight">PerfexAI</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <NavItem key={link.to} to={link.to} icon={link.icon} onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </NavItem>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
              HR
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">HR Manager</p>
              <p className="text-xs text-slate-500">View profile</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <button 
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="ml-auto flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}
