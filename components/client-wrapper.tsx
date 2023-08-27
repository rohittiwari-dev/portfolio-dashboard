"use client"
import React from 'react'

const ClientWrapper = (props: any) => {
    return (
        <form onSubmit={props?.handleSubmit}>
            {props.children}
        </form>
    )
}
export default ClientWrapper
