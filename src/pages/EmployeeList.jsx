import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table'
import { Badge } from '../components/ui/Badge'
import { Search, Filter } from 'lucide-react'

const mockEmployees = [
  { id: 1, name: "Sarah Jenkins", role: "Frontend Engineer", department: "Engineering", status: "Completed", rating: 4.8 },
  { id: 2, name: "Mike Ross", role: "Product Manager", department: "Product", status: "Pending", rating: 4.2 },
  { id: 3, name: "Emma Watson", role: "UX Designer", department: "Design", status: "In Progress", rating: 4.5 },
  { id: 4, name: "David Chen", role: "Backend Engineer", department: "Engineering", status: "Completed", rating: 3.9 },
  { id: 5, name: "Jessica Pearson", role: "Engineering Manager", department: "Engineering", status: "Completed", rating: 4.9 },
]

export default function EmployeeList() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const getStatusVariant = (status) => {
    switch(status) {
      case 'Completed': return 'success'
      case 'Pending': return 'warning'
      case 'In Progress': return 'primary'
      default: return 'default'
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Employees</h1>
          <p className="text-slate-500 mt-1">Manage and view employee performance profiles.</p>
        </div>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search employees..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm font-medium">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Review Status</TableHead>
              <TableHead>Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockEmployees.filter(e => e.name.toLowerCase().includes(searchTerm.toLowerCase())).map((employee) => (
              <TableRow 
                key={employee.id} 
                className="cursor-pointer"
                onClick={() => navigate(`/employees/${employee.id}`)}
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xs">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium text-slate-900">{employee.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">{employee.role}</TableCell>
                <TableCell className="text-slate-600">{employee.department}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(employee.status)}>
                    {employee.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium text-slate-900">{employee.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
