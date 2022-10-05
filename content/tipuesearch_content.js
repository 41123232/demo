var tipuesearch = {"pages": [{'title': 'About', 'text': 'w5 除了 Replit 將利用自行維護的虛擬伺服器執行各學員的動態網站, 目的除了維護個人的內容管理系統外, 也將用於 \n 網際上的積電資整合系統場景: 例如, 控制  http://c1.cycu.org:23020  中作動的機構系統. \n 取代  https://wcms.repl.co  (免費資源已經耗盡, 所以無法正常啟動) 的 server 為  https://wcms.cycu.org:5443 \n 修正原先 request.url 無法正確在非 443 port 情況下跳回 https 協定進入編輯的 bug. \n \n correct_url 函式如下: \n def correct_url():\n\n    """get the correct url for http and https edit mode\n        to replace original request.url under set_admin_css, set_css and set_footer\n    """\n    url = request.url\n    if request.is_secure:\n        return url\n    else:\n        url = url.replace("http://", "https://", 1)\n        return url \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': '能不能將 Blog and Reveal.js 也同動態網站, 直接在線上進行編輯改版? \n 能不能將 SSH 設定完成後, 直接在線上 acp? \n', 'tags': '', 'url': 'cmsimde.html'}, {'title': 'vscode', 'text': 'https://code.visualstudio.com/docs/editor/vscode-web#_opening-a-project  ', 'tags': '', 'url': 'vscode.html'}, {'title': 'NX', 'text': 'NX tutorial   \n', 'tags': '', 'url': 'NX.html'}, {'title': 'CoppeliaSim', 'text': 'Opencv 與 Scenes \n', 'tags': '', 'url': 'CoppeliaSim.html'}, {'title': 'Fusion 360', 'text': '除了  https://onshape.com \xa0 還有 Fusion 360 也提供免費教育版: \n https://www.autodesk.com/education/edu-software/overview', 'tags': '', 'url': 'Fusion 360.html'}, {'title': 'Files', 'text': '.ssh/config \n Host github.com\nUser git\nHostname github.com\nProxyCommand /usr/bin/ncat --proxy p42.cycu.org:3128 --proxy-type http %h %p\n \n acp \n #! /bin/bash\ngit add .\ngit commit -m "$1"\ngit push\n \n 進入倉儲根目錄後, 以 vi acp 建立, 完成存檔後, 必須再利用 chmod u+x acp, 將 acp 檔案設為 user 可以 execuate. \n 運用 acp 執行 git add, git commit 與 git push 之前, 必須先處理好 SSH 設定, 也就是利用 ssh-keygen 在 .ssh 目錄下分別建立 id_rsa private key, 以及 id_rsa.pub public key, 而 id_rsa.pub 可以利用 sftp 從 Ubuntu 取至 Windows 環境後, 送進 Github SSH 設定處, 而 .ssh 目錄下還需要建立一個 config 設定檔案, 以便指定 ssh 推送資料時使用 Proxy.', 'tags': '', 'url': 'Files.html'}, {'title': 'Linux 指令', 'text': 'Linux 指令與 Mac BSD 操作系統的指令相同. \n 常用 Linux 指令: \n 必須熟悉 vi - 以便能在純 text console 模式下進行檔案編輯 \n vi acp \n 表示要利用 vi 編輯 acp 檔案 \n 進入後為指令模式, 可以按下 i 進入 insert 模式, 然後以 i, j, k, l 鍵移動滑鼠游標位置 \n 按下 esc 可以跳出編輯模式, 重新進入指令模式 \n 在指令模式下, 以 a 按鍵 append 字元, 以 o 在下一行插入字元, 以 O 在上一行插入字元. \n 完成編輯後, 必須進入指令模式, 然後按下 :w, 表示要 write file, 若使用 :q! 表示退出且不存檔, 若使用 :wq, 則存檔案後退出. \n cd cmsimde \n cd .. \n ls -l \n pwd \n mkdir \n chmod u+x acp \n', 'tags': '', 'url': 'Linux 指令.html'}, {'title': 'limitation', 'text': 'Ubuntu itself does not limit connections.', 'tags': '', 'url': 'limitation.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};