# TypeScript Function Error for Negative Input

This repository contains a TypeScript function that prints numbers from 1 to n. The function works fine for positive numbers, but throws an error for negative numbers. The expected behavior is that the function should not print anything for negative numbers.

## Bug

The bug is that the function throws an error when a negative number is passed as an argument. This is because the for loop condition `i <= n` is always false when n is negative, resulting in an infinite loop. 

## Solution

The solution is to add a condition to check if n is negative. If n is negative, the function should simply return without printing anything.