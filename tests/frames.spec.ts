/*
An iframe(short for "inline frame") is an HTML element that allows you to embed another HTML document within the current document 
Iframes are commonly used to embed external contet such as videos,maps,or other webpages(As seen here) into a web pae 
*/

import{expect,test} from "@playwright/test";
test("frames demo",async({page})=>{
     await page.goto("https://ui.vision/demo/webtest/frames/")
    //total number of frames presnt on the page
    const frames=page.frames();
    console.log("number of frames",frames.length)
})