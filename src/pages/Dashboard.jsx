import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Users, FileClock, CheckCircle, TrendingUp } from 'lucide-react'

const statCards = [
  { title: "Total Employees", value: "248", icon: Users, trend: "+12 from last quarter", color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Reviews Pending", value: "32", icon: FileClock, trend: "Requires attention", color: "text-amber-600", bg: "bg-amber-50" },
  { title: "Completed Reviews", value: "216", icon: CheckCircle, trend: "87% completion rate", color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Avg Rating (Q3)", value: "4.2", icon: TrendingUp, trend: "+0.3 from last round", color: "text-indigo-600", bg: "bg-indigo-50" },
]

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Overview of the Q3 Performance Review cycle.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                    <p className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-4 font-medium">{stat.trend}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Placeholder for Graph */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-slate-100 rounded-lg bg-slate-50 text-slate-400">
              [ Trend Graph Visualization Placeholder ]
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            <div className="space-y-6">
              {[
                { user: "Sarah Jenkins", action: "submitted a self-review", time: "2 hours ago" },
                { user: "Mike Ross", action: "completed peer feedback for Emma", time: "4 hours ago" },
                { user: "Alex Chen", action: "approved Q3 goals", time: "1 day ago" },
                { user: "System", action: "generated 50 AI summaries", time: "1 day ago" },
              ].map((activity, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-xs font-semibold text-slate-600">
                    {activity.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm text-slate-800 text-pretty">
                      <span className="font-semibold">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
