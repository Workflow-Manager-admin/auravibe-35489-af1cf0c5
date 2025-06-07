#!/bin/bash
cd /home/kavia/workspace/code-generation/auravibe-35489-af1cf0c5/aura_vibe_platform
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

