#!/bin/bash
status=0
for i in $@; do
    cd $i
    jshint js/exercises.js
    status=$(($status+$?))
    jasmine
    status=$(($status+$?))
    cd ..
done
exit $status
