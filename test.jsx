import React, { useState }from 'react'

function LayoutEffect () {

    useLayoutEffect(() => {

        console.log("divRef.current.value")

    }, []); 

    useEffect(() => {

        divRef.current.value = "Hello";

    }, []); 

    <div className= "App">

        <input ref = "divRef" />

        </div>


function LayoutEffect () {

    useLayoutEffect(() => {

        console.log("useLayoutEffect")

    }, []); 

    useEffect(() => {

        divRef.current.value = "Hello";

    }, []); 

    }  


    const inputRef2 = useRef(null);

    useLayoutEffect (() => {

        console.log(inputRef.current.value);

    }, [] );