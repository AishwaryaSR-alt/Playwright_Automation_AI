import {test,expect} from '@playwright/test'

    test.beforeEach('Before each',async()=>{
        console.log("this is Before each")
    })
     test.afterEach('After each',async()=>{
        console.log("this is After each")
    })
     test.beforeAll('Before All',async()=>{
        console.log("this is Before All")
    })
     test.afterAll('After All',async()=>{
        console.log("this is After All")
    })





    test('Test1',async()=>{
        console.log(" this is test1.....");
    })

     test('Test2',async()=>{
        console.log(" this is test2.....");
    })
    test('Test3',async()=>{
        console.log(" this is test3.....");
    })

     test('Test4',async()=>{
        console.log(" this is test4.....");
    })