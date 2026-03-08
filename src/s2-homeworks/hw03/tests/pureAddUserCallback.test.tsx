import React from 'react'
import {pureAddUserCallback} from '../HW3'

let initialState: any[]
const setName = (a: any[]) => {
    initialState = a
}

beforeEach(() => {
    initialState = []
})
//
// test('name 1', () => {
//     pureAddUserCallback('name', setName, initialState)
//     expect(initialState.length).toBe(1)
//     expect(initialState[0].name).toBe('name')
//     expect(!!initialState[0]._id).toBe(true)
// })

test('name 1', () => {
    // Имитируем поведение setState: функция принимает старый массив и возвращает новый
    const pureAddUserCallback = (name: string, setUsers: Function, users: any[]) => {
        const newUser = { _id: Math.random(), name: name }
        setUsers([...users, newUser])
    }

    // Используем функцию для обновления initialState
    pureAddUserCallback('name', (newUsers: any[]) => {
        initialState = newUsers
    }, initialState)

    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})