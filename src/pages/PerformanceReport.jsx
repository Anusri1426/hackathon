import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { ProgressBar } from '../components/ui/ProgressBar'
import { ArrowLeft, Download, ShieldAlert, CheckCircle2 } from 'lucide-react'

export default function PerformanceReport() {
  const { id } = useParams()

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link to={`/employees/${id || '1'}`} className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-2">
            <ArrowLeft className="w-4 h-4" /> Back to Profile
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Performance Report: Q3</h1>
          <p className="text-slate-500 mt-1">Sarah Jenkins • Frontend Engineer</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm font-medium">
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </div>

      {/* Bias Alert */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 text-amber-800">
        <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600" />
        <div className="text-sm">
          <p className="font-semibold text-amber-900">AI Fairness Calibration Notice</p>
          <p className="mt-1">
            There is a <span className="font-bold">large discrepancy (20%)</span> between the Self Review score and Manager Feedback. HR review is recommended to ensure fair calibration.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 border border-primary-100 shadow-sm shadow-primary-100/50">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full gap-2">
            <p className="text-sm font-medium text-slate-500">Aggregated Score</p>
            <div className="text-5xl font-bold text-primary-600 tracking-tighter">84%</div>
            <p className="text-xs text-slate-400">Exceeds Expectations</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Score Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ProgressBar progress={92} label="Self Review (20% weight)" colorClass="bg-blue-500" />
            <ProgressBar progress={88} label="Peer Feedback (30% weight)" colorClass="bg-emerald-500" />
            <ProgressBar progress={75} label="Manager Review (50% weight)" colorClass="bg-indigo-500" />
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Summary & Next Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed text-pretty">
            Overall, Sarah has shown significant growth in technical execution. The primary developmental focus for the next quarter should be on project management and cross-functional communication, bridging the gap identified in the manager review.
          </p>
          <div className="pt-4 border-t border-slate-100">
            <h4 className="font-semibold text-slate-800 mb-3 text-sm">Signatures</h4>
            <div className="flex items-center gap-8 justify-between lg:justify-start">
              <div className="flex items-center gap-2 text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">Manager Signed</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-5 h-5 border-2 border-slate-300 rounded-full" />
                <span className="text-sm">Employee Signature Pending</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
