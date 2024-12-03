"use client"

import { useActionState } from "react"
import { create } from "../action"

export default function Form() {

    const [state, actionForm, isPending] = useActionState(create, null)
    return (
        <div className="form_container">
            <div className="wrapper">
                <h1 className="title">Form Todo</h1>
                <p>{state?.message}</p>
                <form action={actionForm} className="form">
                    <input type="text" name="title" required />
                    <button type="submit" disabled={isPending}>Submit</button>
                </form>
            </div>
        </div>
    )
}