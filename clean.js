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

let myFileList = [
  "./.git",
  "./.github",
  "./.npmignore",
  "./LICENSE",
  "./npm-version-bump.js",
  "./clean.js",
  "./package.json",
  "./README.md",
];
function deleteall(path) {
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
      var curPath = path + "/" + file;
      // console.log(curPath);
      if (myFileList.indexOf(curPath) == -1) {
        console.log(curPath);
        if (fs.statSync(curPath).isDirectory()) { // recurse
          deleteall(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      }
    });
  }
};

deleteall(".");