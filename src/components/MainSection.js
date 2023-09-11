import { Portfolio } from "./Portfolio";
import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Minesweeper } from "./Minesweeper";


export const MainSection = () => {
    return (
            <div className='main-section'>
                <Routes>
                    <Route path="/" element={<Portfolio/>}/>
                    <Route path="/minesweeper" element={<Minesweeper/>}/>
                </Routes>
            </div>

    )
}