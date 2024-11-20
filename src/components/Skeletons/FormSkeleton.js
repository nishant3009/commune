import React from 'react'
import "./FormSkeleton.css"
function FormSkeleton() {
    return (
        <>
            <div className="skeleton" style={{ width: "500px", height: "400px" }}>
                <div className="skeleton-text">
                    <div className="skeleton-text__body"></div>
                    <div className="skeleton-text__body"></div>
                    <div className="skeleton-text__body"></div>
                </div>
                <div className="skeleton-footer"></div>
            </div>
        </>
    )
}

export default FormSkeleton
