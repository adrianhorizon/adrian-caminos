#!/usr/bin/env sh

npm run build

firebase deploy -P adrian-caminos --token "$FIREBASE_DEPLOY_TOKEN"