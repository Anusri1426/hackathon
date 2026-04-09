import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Settings, Users, Scale, Save } from 'lucide-react'

export default function AdminPanel() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Admin Panel</h1>
        <p className="text-slate-500 mt-1">Configure system settings and calibration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row justify-between items-center bg-slate-50 border-b border-slate-100 rounded-t-xl">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-indigo-600" />
                <CardTitle>Evaluation Criteria Weights</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-slate-500 mb-6">Adjust the impact of different review sources on the aggregate score. Total must equal 100%.</p>
              
              <div className="space-y-5">
                {[
                  { label: "Self Review", value: 20 },
                  { label: "Peer Feedback", value: 30 },
                  { label: "Manager Review", value: 50 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <label className="w-32 text-sm font-medium text-slate-700">{item.label}</label>
                    <input 
                      type="range" 
                      min="0" max="100" 
                      defaultValue={item.value}
                      className="flex-1 accent-indigo-600"
                    />
                    <div className="w-16 flex items-center justify-end font-semibold text-slate-800">
                      {item.value}%
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm">
                  <Save className="w-4 h-4" /> Save Weights
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row gap-2 items-center bg-slate-50 border-b border-slate-100 rounded-t-xl">
              <Settings className="w-5 h-5 text-slate-600" />
              <CardTitle>AI Calibration Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
               <div className="space-y-4">
                 <label className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                   <input type="checkbox" defaultChecked className="mt-1 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                   <div>
                     <p className="text-sm font-semibold text-slate-800">Enable Sentiment Analysis Warnings</p>
                     <p className="text-xs text-slate-500 mt-0.5">Flag reviews containing extreme negative bias or unprofessional language.</p>
                   </div>
                 </label>
                 <label className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                   <input type="checkbox" defaultChecked className="mt-1 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                   <div>
                     <p className="text-sm font-semibold text-slate-800">Auto-Generate Summaries</p>
                     <p className="text-xs text-slate-500 mt-0.5">Use AI to aggregate textual feedback into concise performance summaries.</p>
                   </div>
                 </label>
               </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
             <CardHeader className="flex flex-row gap-2 items-center border-b border-slate-100 pb-4">
              <Users className="w-5 h-5 text-emerald-600" />
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <button className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-all">
                Manage Employee Roster
              </button>
              <button className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-all">
                Launch New Review Cycle
              </button>
              <button className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-all">
                Export System Logs
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
