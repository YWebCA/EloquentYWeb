#!/bin/bash
for i in $@; do
    cd $i
    jshint js/exercises.js
    jasmine
    cd ..
done
