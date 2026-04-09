import React from 'react'
import { cn } from '../../lib/utils'

export function Table({ className, children, ...props }) {
  return (
    <div className="w-full overflow-auto">
      <table className={cn("w-full text-sm text-left whitespace-nowrap", className)} {...props}>
        {children}
      </table>
    </div>
  )
}

export function TableHeader({ children }) {
  return <thead className="bg-slate-50 text-slate-500 uppercase text-xs">{children}</thead>
}

export function TableBody({ children }) {
  return <tbody className="divide-y divide-slate-100">{children}</tbody>
}

export function TableRow({ className, children, ...props }) {
  return (
    <tr className={cn("hover:bg-slate-50/50 transition-colors", className)} {...props}>
      {children}
    </tr>
  )
}

export function TableHead({ className, children, ...props }) {
  return (
    <th className={cn("px-6 py-4 font-medium", className)} {...props}>
      {children}
    </th>
  )
}

export function TableCell({ className, children, ...props }) {
  return (
    <td className={cn("px-6 py-4", className)} {...props}>
      {children}
    </td>
  )
}
