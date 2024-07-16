'use client'

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { useState } from "react"
function GenerateComponent() {

    const [text, setText] = useState('')
    // const [explanation, setExplanation] = useState('')

    const handleSubmit = async () => {
        const res = await axios.post('http://localhost:3000/api/generate', {
            code: text
        })

        console.log(res)
    }

    return (
        <div className="flex min-h-screen items-center justify-between">
            <div className="w-1/2 flex flex-col justify-center items-center border-slate-300 p-5 m-2 space-y-2">
                <h1 className="text-3xl font-bold">Code Explainer</h1>
                <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your code here" className="h-5 w-1/2 border-blue-950" />
                <Button onClick={handleSubmit}>Generate</Button>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center border-slate-300 p-5 m-2 space-y-2">
                <h1 className="text-3xl font-bold">Here's the explanation</h1>
                <div className="bg-gray-400 rounded-lg p-5 min-h-[400px] max-h-[400px] min-w-[600px] max-w-[600px] overflow-y-auto">

                </div>
            </div>
        </div>
    )
}

export default GenerateComponent