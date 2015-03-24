#!/bin/bash
status=0
for i in $@; do
    cd $i
    jasmine
    status=$(($status+$?))
    cd ..
done
exit $status
