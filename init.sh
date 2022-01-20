#!/bin/sh

(cd /var/app && node_modules/.bin/prisma migrate deploy)
(cd /var/app && node_modules/.bin/prisma generate)
(cd /var/app && node dist/src/main.js)