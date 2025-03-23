#!/bin/bash
ip address show dev ham0 | grep inet | awk '{print $2}' | head -1
