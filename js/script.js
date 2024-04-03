// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {

  //input
  const lengthOfPyramid = parseFloat(document.getElementById("length-of-pyramid").value)
  const widthOfPyramid = parseFloat(document.getElementById("width-of-pyramid").value)
  const heightOfPrapezium = parseFloat(document.getElementById("height-of-pyramid").value)

  //process
  const volumeHalfway = (lengthOfPyramid * widthOfPyramid * heightOfPrapezium)
  const volumeAnswer = volumeHalfway / 2 
  const volumeFinalAnswer = volumeAnswer.toFixed(2)

  //output
  document.getElementById("answer").innerHTML =
    "The volume of this pyramid is: " + volumeFinalAnswer + " mm³."
}