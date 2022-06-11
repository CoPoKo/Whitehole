/*!
 * ==========================================================================
 * "CoPoKo Whitehole" License
 * GNU General Public License version 3.0 (GPLv3)
 * ==========================================================================
 * This file is part of "CoPoKo Whitehole"
 *
 * "CoPoKo Whitehole" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "CoPoKo Whitehole" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "CoPoKo Whitehole". If not, see <http://www.gnu.org/licenses/>.
 * ==========================================================================
*/
const fs = require('fs')
let version = process.env.OOS_VERSION.replace("Update:","");
console.log(version);
const pageageFile = {
  "name": "@copoko/whitehole",
  "version": `0.0.${version}`,
  "description": "This is @copoko/whitehole",
  "main": "README.md",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["CoPoKo", "Whitehole"],
  "author": "CoPoKo Team",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/CoPoKo/Whitehole.git"
  },
  "bugs": {
    "url": "https://github.com/CoPoKo/Whitehole/issues"
  },
  "homepage": "https://github.com/CoPoKo/Whitehole#readme",
  "license": "GPL-3.0"
}
const pageageFileStr = JSON.stringify(pageageFile)
if (process.env.OOS_VERSION.indexOf("Update:")>-1) {
  fs.writeFile('./package.json', pageageFileStr, 'utf8', (err) => {
    if (err) throw err
  })
}
