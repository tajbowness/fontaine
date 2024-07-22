import React from "react"

export default function AppCard(props) {

    return (
        <div 
            className={`app-card-cont ${!props.released ? "app-unreleased-style":""} ${props.suggestion ? "app-suggestion-cont":""}`} 
            style={props.released && {backgroundColor: props.color}}
        >
            {!props.suggestion && (
                <>
                <p className="app-title">{props.title}</p>
                {props.released && (
                    <>
                    <p className="cursor-click" onClick={()=> window.open("https://apps.shopify.com/partners/tajbowness", "_blank")}>App Store</p>
                    </>
                )}
                </>
            )}
        {props.suggestion && (
            <>
            <p className="title-2-style">Have a suggestion or a request?</p>
            <p>Please consider reaching out to me at tajbownessdev@gmail.com</p>
            </>
        )}
        </div>
    )
}