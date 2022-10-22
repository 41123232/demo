var tipuesearch = {"pages": [{'title': 'About', 'text': '在 2022 Fall 的課程中, 採近全雲端的機械產品設計, 可以透過瀏覽器直接利用 stud 伺服器與 Onshape 執行程式編寫、內容管理與零組件設計繪圖, 唯獨機電模擬目前仍無法全部在瀏覽器中運行, 但至少已經可以透過 Three.js 與 Websocket 的整合, 讓 CoppeliaSim 的模擬場景在瀏覽器中呈現. 另外一個趨勢是, 除了電腦必須讓手機與平板在機械設計流程中扮演更重要的角色. 網站的內容維護與觀看更需考慮在電腦、手機與平板都能平順進行. \n 至於近端的機械產品設計流程則可以採 Solvespace 與 NX 完成零組件設計繪圖, 並以可攜程式環境編寫 server 端的應用程式, 用來控制零組件參數或進行機電模擬系統的控制等. 而 cmsimde 在近端也可以如遠端操作進行動態與靜態網頁的維護與展示. \n 靜態網站:  https://mde.tw/demo/ \n 倉儲:  https://github.com/mdecycu/demo \n 公佈欄網站:  https://mde.tw/wcms \n \n', 'tags': '', 'url': 'About.html'}, {'title': '語音輸入', 'text': 'cmsimde 動態網頁若能在手機瀏覽器中開啟, 就能使用語音輸入頁面內容 \n 在這個頁面我們使用手機的語音辨識來輸入內容 \n 一方面可以當作備忘錄來使用 \n 再者可以把一些即時想到的事項 \n 或者是未來即將處理的網站改版提醒放在這裡 \n 頁面編輯之後，可以轉為靜態網頁，然後使用 acp 按鈕直接將改版內容提交到 GitHub Pages \n', 'tags': '', 'url': '語音輸入.html'}, {'title': 'w5', 'text': 'Under Windows: \n \n 所謂 Secure Shell 就是利用 公開金鑰加密 , 在傳輸指令的過程對內容加密, 以保障資訊不被第三方取得, 當使用者在近端執行個人倉儲的動態網站後進行編輯改版, 並將動態網站轉為靜態網站, 希望將新的靜態網站內容送到 Github Pages\xa0 中的過程, 可以透過 SSH 協定建立一對數位鑰匙, 其公開鑰匙登錄到 Github SSH 設定區, 而私人鑰匙則放在近端電腦或隨身碟中, 當推送資料時只有與帳號下公鑰配對的私鑰擁有者, 有權限更改倉儲內容, 以下為在 Windows 操作系統採 SSH 對 Github 倉儲進行改版的設定過程. \xa0 \n 確定\xa0 start.bat 啟動時已經設定 GIT_SSH 變數, 且與 plink.exe 連結, 表示設定之後的 Git\xa0 指令, 若採 SSH 協定與 Github 溝通, 近端的金鑰加密格式採用 Putty 所提供的 ppk 格式. \xa0 \n 在 Windows 操作系統, 可以 利用 Putty 的 puttygen.exe 產生 public key (OpenSSH 格式, 可登錄到 Github) 與 private key (ppk 格式), 且將 public key 放入 Github 帳號下 settings -> SSH and GPG 設定區. \xa0 \n 將 private key 存入隨身碟或 C 槽後,\xa0 送到自己的 onedrive 區, 當設定\xa0 putty.exe session 時必須在 session 使用授權區給定私鑰儲存位置. \xa0 \n 利用 putty.exe 在電腦上設定一個 session 名稱, 且此一 session 名稱, 代表三項資訊: a. 以 SSH\xa0 協定連結到 github.com (default port 為 22),\xa0 b. 決定需不需要使用 proxy (github.com 目前僅支援 IPv4), c. ppk 格式的 private key 位置. \xa0 \n \n \xa0 \n 利用 Putty session 以 SSH 協定 git clone 遠端倉儲, 假如前述設定都正確的話, 就可以在近端改版後, 將版本推向 Github. \xa0 \n \xa0 \n SSH\xa0 從 Github git clone\xa0 語法: \xa0 \n \xa0 \n git clone\xa0 --recurse-submodules\xa0  git@putty_session_name:github_account/repository_name.git \xa0 \n \xa0 \n 請特別注意\xa0 putty_session_name 與\xa0 github_account 中間為 : \n \n Under Ubuntu \n \n (登入 stud.cycu.org)利用 @nfu 電子郵箱收到的帳號與密碼, 登入 stud.cycu.org:\xa0 在命令列視窗, 以 ssh  cad學號@stud.cycu.org , 輸入對應密後, 可以登入系統 \xa0 \n 請到 excel 檔案  查詢  stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用) 與遠端 (給 stud.cycu.org) 埠號 \xa0 \n (透過 sftp 建立近端目錄與 stud.cycu.org 帳號下的對應)\xa0 開啟另一個命令列, 執行 sftp  帳號@stud.cycu.org \xa0\xa0  輸入對應密碼, 即可建立近端目錄與遠端系統目錄間的對應. \xa0 \n 與在近端(Windows)利用\xa0 SSH 建立 public/private keys 流程相同, 必須在 Linux (Ubuntu) 利用 ssh-keygen 建立 keys. 所產生的 id_rsa 為 private key, 而 id_rsa.pub 為 public key, 都位於 .ssh 目錄下. \xa0 \n 利用 sftp\xa0 進入 stud.cycu.org 後, cd 到 .ssh, 以 get id_rsa.pub 將 public key 取至\xa0 Windows 後, 送到 Github -> Settings -> SSH and GPG 設定區, 透過 new key 登錄公鑰. \xa0 \n 接下來要下載\xa0  config  設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 上面的\xa0 config\xa0 主要設定 SSH 協定對\xa0 github.com\xa0 連線時的代理主機, 但取下\xa0 cmsimde\xa0 子模組使用的是\xa0 https,\xa0 因此執行下列\xa0 git clone 時將會同時用到\xa0\xa0 SSH\xa0 與 https\xa0 協定,\xa0 因此除了\xa0 .ssh\xa0 目錄下要有\xa0 config\xa0 設定檔案外, 也必須同時在\xa0 .gitconfig\xa0 檔案中設定\xa0 http.proxy,\xa0 也就是以 git config --global http.proxy  http://p42.cycu.org:3128   設定供 https 連線使用的代理主機, 並且以\xa0 git config --global\xa0 user.name 以及\xa0 git config --global\xa0 user.email 設定提交用的身分註記. \xa0 \n 在 stud.cycu.org 中, 以 git clone --recurse-submodules\xa0  git@github.com:mdecad2022/site-個人github帳號.git \xa0\xa0 取下個人倉儲. \xa0 \n 假如先前使用\xa0 git clone 並沒有取下\xa0 cmsimde 子模組內容, 只要在設定 https 代理主機後, 進入倉儲根目錄執行\xa0 git submodue update --init\xa0 --recursive\xa0 即可取下子模組內容. \xa0 \n 接著下載  server.py , 在 Windows 編輯  server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 在 stud.cycu.org 系統中, 進入倉儲 (site-github帳號) 後, 執行 python3 server.py, 就可啟用動態網站. \xa0 \n 設定完成後, 各學員將會有一個廣域網路上的動態網站 (取代 Replit 上的動態網站),  https://stud.cycu.org:8xxxx \xa0\xa0 看到個人的動態網站. \xa0 \n 動態網站改版後, 轉為靜態, 必須透過 source  acp  以 SSH 將改版內容送回 github. (必須利用 chmod u+x acp 將 acp\xa0 檔案屬性改為對\xa0 user 可以 execute (也就是 x 屬性). \xa0 \n 執行 source acp\xa0 "提交字串" 之前必須要 git config\xa0 --global user.name,  git config\xa0 --global user.email,  git config\xa0 --global http.proxy \xa0 \n 上述採用指令模式對\xa0 server sftp 也可以利用\xa0  Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n \n config under .ssh 目錄: \n Host 就是 .ssh/config 設定的對應 session 名稱, 此處若 Host 設為 demo, 則 SSH 對應的 .git/config 中的 URL 就必須使用  git@demo:mdecad2022/site-scrum-1.git,  demo 就是 Host, Port 則是隨後的 %p, 也就是 SSH 協定的內建 port 22, %h 則是 Hostname, 也就是 github.com \n Host demo\nUser git\nHostname github.com\nProxyCommand /usr/bin/ncat --proxy p42.cycu.org:3128 --proxy-type http %h %p \n \n 2a 在一台遠端 server, 執行個人倉儲的動態網頁. \xa0 \n \xa0 \n \n Login to \xa0 https://mail.nfu.edu.tw \xa0 -\xa0 查看登入 stud.cycu.org 伺服器的帳號密碼, 帳號為 cad+學號, 密碼為四個字元, 包括數字與小寫英文字母 \xa0 \n 請到 excel 檔案 \xa0 查詢 \xa0 stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用, 9 開頭的 port) 與遠端 (給 stud.cycu.org, 8 開頭的 port) 埠號 \xa0 \n 修改可攜 Python 3.10.6 start.bat, 蓋掉第三行後重新啟動, 目的希望將操作系統的命令搜尋路徑放在可攜目錄搜尋路徑之後. \xa0 \n 重新啟動可攜程式環境, 在其中一個命令列, ssh\xa0 \xa0 cad+學號@stud.cycu.org , 表示要使用 secure shell 遠端登入到 stud.cycu.org, 這是一台 Linux 主機, 安裝 Ubuntu 22.04 Server.(若使用的網路連線協定並無 IPv6,\xa0 可將系統的 proxy 設為 140.130.17.4:3128 kmolab/kmolab) \xa0 \n 在 ssh 登入畫面, 以 ssh-keygen 建立 key pairs, .ssh/id_rsa 為 private key, id_rsa.pub 為 public key \xa0 \n 設法利用 Filezilla, 以 sftp 安全的(Secure)檔案(File)傳輸(Transmission)協定(Protocol), 與 stud.cycu.org 伺服器連結. \xa0 \n 利用\xa0 Filezilla sftp 取下 id_rsa.pub, 登錄至 Github 帳號下的 Setting - >\xa0 SSH and GPG keys. \xa0 \n 對\xa0 server sftp 也可以利用\xa0 \xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n 接下來要下載\xa0 \xa0 config \xa0 設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 接下來要在\xa0 Ubuntu (也就是 stud.cycu.org 這台主機所安裝的操作系統) 中, 設定 .gitconfig, 總共包含三項設定: git config --global user.name "scrum-1", git config --global user.email\xa0 "scrum1@mde.tw"\xa0 \xa0以及 git config --global http.proxy http://p42.cycu.org:3128, 這三個設定必須在 ssh 登入畫面中執行, 設定完成檔案會存入帳號根目錄中的 .gitconfig \xa0 \n 利用\xa0 git clone --recurse-submodules\xa0 \xa0 git@demo:mdecad2022/site-scrum-1.git \xa0 demo \xa0 \n 接著下載 \xa0 server.py , 在 Windows 編輯 \xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 登入\xa0 Ubuntu 後, 會使用的指令: pwd 代表 print working directory, clear -\xa0 清除螢幕, cd - 更換目錄, ls -l 列出目錄詳細內容, chmod u+x \xa0 acp \xa0 表示讓 user 可以 execute acp script (能夠讓使用者以 source acp 加上提交字串進行 git add, git commit, git push, 如何在 Windows 執行 acp.bat 加上提交字串. \xa0 \n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'cmsimde', 'text': '能不能將 Blog and Reveal.js 也同動態網站, 直接在線上進行編輯改版? \n 能不能將 SSH 設定完成後, 直接在線上 acp? (已經完成) 可以透過 user.py 以 blueprint 架構延伸. \n https://stud.cycu.org:8000/user/threegear \n blog 編輯及轉檔網際化 \n 簡報編輯網際化 \n Brython three.js based stl viewer \n \n stud.cycu.org 目前是透過不同的 port 讓多用戶能在同一台電腦伺服器上運行動態網站, 而 Replit 或其他商用雲端系統的做法則是加入 dns 的動態設定, 讓每一位用戶可以各自擁有獨一的 domain name, 然後經由此一 domain name 啟用動態網站. \n 實際的可行作法是讓 demo 用戶在 stud.cycu.org 主機上擁有 demo.stud.cycu.org 或 demo.cycu.org 網域名稱的使用權, 然後當使用者在其帳號下的倉儲執行某一特定的主倉儲動態網站時, 以 demo.cycu.org 啟動, 若執行其帳號下的另一個名稱為 wcms 的倉儲動態網站時, 則以 wcms.demo.cycu.org 啟動, 然後依此類推. \n 目前 cadlab 總共管理 mde.nfu.edu.tw 與 eng.nfu.edu.tw 等兩個網域的 dns servers, 因此就網路技術層面而言, 上述建構如 Replit 般的網際應用程式服務是可行的. 較為簡單的做法是直接在 dns server 上建立此一服務. \n 若要跨 server 建立上述服務, 則 server 間仍需透過類似 Websocket 程式變數的派送, 並在使用者建立帳號後, 便直接在 dns 伺服器上登錄其使用權, 且在同一台電腦的 IPv6 address 上利用 CNAME 分辨各用戶所屬的 domain, 然後在後續伺服器設定時採用. \n', 'tags': '', 'url': 'cmsimde.html'}, {'title': 'TCExam', 'text': "啟動流程: \n 進入 C:\\tcexam\\pgsql 執行 start.bat 啟動資料庫伺服器 \n 其餘對應的 nginx 與 php 執行對應都採 service 啟動 \n 管理設定: \n C:\\tcexam\\tcexam\\shared\\config\\tce_user_registration.php \n 由 define('K_USRREG_ENABLED', false); 控制是否開放用戶註冊", 'tags': '', 'url': 'TCExam.html'}, {'title': 'vscode', 'text': 'https://code.visualstudio.com/docs/editor/vscode-web#_opening-a-project', 'tags': '', 'url': 'vscode.html'}, {'title': 'News', 'text': 'https://www.digitaltrends.com/news/search-and-rescue-jetpack-aces-flight-test-in-lousy-weather/ \xa0 \n https://www.reuters.com/technology/exclusive-automakers-double-spending-evs-batteries-12-trillion-by-2030-2022-10-21/ \xa0 \n https://www.engadget.com/metas-ai-translator-can-interpret-unwritten-languages-150001511.html \xa0 \n https://www.vice.com/en/article/pkgxqz/record-labels-say-ai-music-generators-threaten-music-industry \xa0 \n https://edition.cnn.com/2022/10/21/tech/artists-ai-images/index.html \xa0 \n https://www.techspot.com/news/96392-someone-wrote-javascript-app-accurately-emulates-windows-95.html \xa0 \n', 'tags': '', 'url': 'News.html'}, {'title': 'cp2022', 'text': '', 'tags': '', 'url': 'cp2022.html'}, {'title': 'CP抽點程式', 'text': '2022 Fall 課程代號: \n 以下為抽點程式 ( 執行 ): \n # Python 的註解分為單行註解與多行, 單行註解可在字串前方放入 #\n\'\'\'多行註解則可以透過三個單引號前後標註字串或文字段落內容, \n也可以使用三個雙引號作為多行註解的標註\n\'\'\'\n# 使用 import 導入 random 模組, 隨後就可以直接引用 random 模組的方法\nimport random\ncourses = {"1a": "0747", "1b": "0761", "2a": "0773", "2b": "0786"}\nc_name = "1b"\nc = courses[c_name]\n# 宣告 url 變數值為字串, 此字串為取得 cp2022 1a 選課成員名單\nurl = "https://nfu.cycu.org/?semester=1111&courseno=" + c + "&column=True"\n# 利用上述已經宣告的 url 變數字串值, 作為 open() 函式的輸入變數, 可以連結至該網站\n# 連接 url 所代表字串的網站後, 再利用 read() 函式讀取該網站的內容, 即可取得 c_name 的選課成員學號\n# url 所屬的網站, 乃 69 中的一台虛擬主機 8/10ff-0-1-2, 並利用 Get 從教務主機取回課程註冊成員學號\n# 由於所取回的學號以跳行符號隔開, 因此取回的學號資料行, 再利用 split() 函式, 以 \\n 跳行符號分割後\n# 所對應到 data 的資料型別將會是數列\ndata = open(url).read().split("\\n")\n# 經過檢查 data 數列, 發現最後一個 element 為空字串, 因此利用 [:-1] 去掉數列的最後一個元素, -1 代表數列最後一個元素的索引\n#print(data[:-1])\n# 設定一個變數, 與修課成員學號數列對應\nstud = data[:-1]\n# 使用 random 模組中的 shuffle() 函式, 以隨機的方式排列 stud 數列內容\nrandom.shuffle(stud)\n# 設定 num 與 5 對應, 或將 5 整數值存入 num 變數所對應的記憶體位址\nnum = 5\n# 利用 for 重複迴圈與 range() 變數, 列印出 (利用 print() 函式) 已經隨機排列次序的 stud 數列的最前面 num 個學號值\nfor i in range(num):\n    print(stud[i]) \n', 'tags': '', 'url': 'CP抽點程式.html'}, {'title': 'CP 靜態網頁連結', 'text': '1a靜態網頁連結執行 \xa0( 抽五名 ) \n 1b靜態網頁連結執行 \xa0( 抽五名 ) \n 2a靜態網頁連結執行 \xa0( 抽五名 ) \n 2b靜態網頁連結執行 \xa0( 抽五名 ) \n # 從 Brython 的 browser 模組導入 document 與 html 程式庫\nfrom browser import document, html\n\n# 利用 document 物件, 以索引 "brython_div1" 取得已經位於 html 網頁中 id="brython_div1" 的位置, 且對應到 brython_div1 變數\nbrython_div1 = document["brython_div1"]\n# 可以用三個單引號或三個雙引號標註多行註解\n# 其中的 html 物件有許多建立 html 超文件內容的方法, 以下分別建立\n# BUTTON 按鈕, BR 跳行 (break), 以及 A 網站連結 (Anchor)\n# <= 是 Brython 程式語言的特殊符號, 專用於將 html 超文件資料送給網頁對應變數\n"""\nbrython_div1 <= html.BUTTON("hello")\nbrython_div1 <= html.BR()\nbrython_div1 <= html.A("google", href="https://google.com")\n"""\n\n# 將 1b.txt 資料從 Github Pages 網頁中取下\nurl = "https://mde.tw/studlist/2022fall/1b.txt"\n# 利用 open() 開啟網頁, 利用 read() 讀取網頁內容\n# 然後利用 split() 方法, 利用跳行符號對資料進行切割, 切割後的資料結構為 list\n# list 資料結構以 [] 區隔, 表示資料為數列, 其起始的索引值為 0\ndata = open(url).read().split("\\n")\n# 將每一位學員的靜態網頁共同的網路連結部分設為字串, 且與 mdecp2022 變數對應\nmdecp2022 = "https://mdecp2022.github.io/site-"\n# 因為取下的資料第一筆為標題, 而最後一筆為空字串, 可以利用 Brython 的數列索引取值範圍將索引 0 與最後一個數列值去除\ndata = data[1:-1]\n# 利用 for 重複迴圈逐一取出 data 數列中的值, 然後以 \\t, 也就是 tab 符號切割\nfor i in data:\n    stud = i.split("\\t")\n    # 第一欄位為學號\n    stud_num = stud[0]\n    # 第二欄未為 github 帳號\n    github_acc = stud[1]\n    #print(stud_num, github_acc)\n    # 若沒有找到 github 帳號, 以學號作為帳號\n    if github_acc == "":\n        github_acc = stud_num\n    # 將靜態網頁共同連結的變數與各自的 github 帳號, 組成完整的各學員靜態網頁連結\n    site = mdecp2022 + github_acc\n    # 利用 A 物件產生連結, 然後放入 id="brython_div1 所在的網頁位置\n    link = html.A(stud_num, href=site)\n    brython_div1 <= link\n    # 每一筆資料列出後, 以 break 標註跳行\n    brython_div1 <= html.BR() \n', 'tags': '', 'url': 'CP 靜態網頁連結.html'}, {'title': 'Brython', 'text': '學習 Brython 程式語言 \n 執行 Three.js 相關 Brython 程式, 需要將  pyweb3d.py  放入 downloads/py 目錄中ㄡ \n https://mde.tw/content/Python.html \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'cad2022', 'text': '電腦輔助設計與實習課程 \n 課程內容包括如何使用電腦輔助設計套件 \n 以及如何轉檔之後轉入其他工程分析軟體 \n 包括機電系統控制設計與模擬 \n 在 Onshape 上繪製零組件:  https://onshape.com \n 在 Solvespace 上繪製零組件:  https://solvespace.com  (自行編譯  Solvespace 原始碼 ) \n 在 Siemens NX 上繪製零組件:  下載 NX2027.3401_lite_cad2022.7z  (必須登入 @nfu 所屬的 Teams) \n 利用  CoppeliaSim  執行機電控制系統設計與模擬 \n 利用 stud.cycu.org 動態網站整理上述工具實習流程與結果, 並同步內容至個人的 Github Pages 網站. \n 相關設計程式包含 server 端的 Python 與 browser 端的 brython, 其間透過 websocket 傳送設計變數. \n', 'tags': '', 'url': 'cad2022.html'}, {'title': 'stud server', 'text': 'ps command \n ps axo pid,comm,user|grep "python3" \n specifig port for certain user: \n https://unix.stackexchange.com/questions/486945/restrict-local-port-access-to-a-specific-user \n ip6tables -I OUTPUT -o lo -p tcp --dport 5000 --match owner --uid-owner 1000 -j DROP \n https://github.com/hkbakke/fwgen \n', 'tags': '', 'url': 'stud server.html'}, {'title': 'cadw7', 'text': 'stage1 \n 152815 python3 cad41023240  189883 python3 demo  208291 python3 cad41023210  219678 python3 cad41023247  223605 python3 cad41023216  256296 python3 cad41023124  257116 python3 cad41023118  257188 python3 cad41023119 \n stage2 \n 152815 python3 cad41023240  189883 python3 demo  208291 python3 cad41023210  219678 python3 cad41023247  223605 python3 cad41023216  256296 python3 cad41023124  260052 python3 cad41023122  264526 python3 cad41023143  277902 python3 cad41023133  281016 python3 cad41023119  283220 python3 cad41023138  287930 python3 cad41023104  288921 python3 cad41023154  290114 python3 cad41023110  291175 python3 cad41023126  291606 python3 cad41023108  292904 python3 cad41023120', 'tags': '', 'url': 'cadw7.html'}, {'title': 'websocket', 'text': '網際前端與網際後端傳送設計參數, 若 stud server 可以安裝 NX, 則使用者可以從網際前端將設計變數送到 server 後, 將此設計變數透過 NXOpen 驅動 NX 改變零件尺寸或組立位置. \n 相同機制, 也可以從網際前端將操控 Web based CoppeliaSim 的控制變數送到\xa0 server 端後, 直接操控網際場景中作動的機電系統模擬. 例如: 使用者在網際前端送出控制手足球一端連桿的平移距離與速度, 然後經由手足球 server 端的 Python 程式接收後, 以 Remote API 程式架構控制手足球場景. \n # Brython websocket example\n"""\n# Python WebSocket server\n# pip install asyncio websockets\nimport asyncio\nimport websockets\n\nasync def hello(websocket, path):\n    name = await websocket.recv()\n    print(f"< {name}")\n\n    greeting = f"Hello {name}!"\n\n    await websocket.send(greeting)\n    print(f"> {greeting}")\n\nstart_server = websockets.serve(hello, "localhost", 8765)\n\nasyncio.get_event_loop().run_until_complete(start_server)\nasyncio.get_event_loop().run_forever()\n"""\n\nfrom browser import document\nfrom browser import html, window, websocket\n\n# 將 brython_div 變數設為 id 為 "brython_div 的 doc 物件\nbrython_div = document["brython_div"]\n\n# 插入輸入表單\nform = html.FORM()\ngearNumInput = html.INPUT(type="text", id="data", value="特斯拉")\nbutton = html.BUTTON("Run Websocket", id="run")\nbutton3 = html.BUTTON("Close Connection", id="close")\nform <= "Name: " + gearNumInput  + html.BR()\nbrython_div <= form + button + html.BR()\nbrython_div <= button3 + html.BR()\n\ndef on_open(evt):\n    # Web Socket is connected, send data using send()\n    data = document["data"].value\n    if data:\n        ws.send(data)\n        alert("Message is sent")\n\ndef on_message(evt):\n    # message received from server\n    alert("Message received : %s" %evt.data)\n\ndef on_close(evt):\n    # websocket is closed\n    alert("Connection is closed")\n\nws = None\ndef _test(_):\n    global ws\n    # open a web socket\n    # ws 為一般連線, wss 為 secure 連線\n    ws = websocket.WebSocket("ws://localhost:8765")\n    # attach functions to web sockets events\n    ws.bind("open", on_open)\n    ws.bind("message", on_message)\n    ws.bind("close", on_close)\n\ndef close_connection(_):\n    ws.close()\n\ndef hello(ev):\n    alert("Hello !")\n\n# 假如不導入 websocket, 也可以執行 Javascript 的 WebSocket\n#websocket = window.WebSocket.new\ndocument["run"].bind("click", _test)\ndocument["close"].bind("click", close_connection) \n', 'tags': '', 'url': 'websocket.html'}, {'title': 'Solvespace', 'text': '利用  portable_2022_fall_13GB.7z , 完成編譯. \n 由於利用 \xa0 MSYS2 \xa0 編譯 Solvespace, 需要 install cmake \n pacman -S mingw-w64-x86_64-cmake \n 而且必須 rename Y:\\msys64_20210419\\mingw64\\bin\\sh.exe 與\xa0Y:\\portablegit_2.31.1\\bin\\sh.exe 換成其他名稱. \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git cd solvespace mkdir build cd build cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release make need libwinpthread-1.dll to execute solvespace.exe', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'Onshape', 'text': 'Drill Press 鑽床 \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'NX', 'text': 'NX tutorial \n Onshape:  https://cadlab.mde.tw/post/onshape-featurescript-spur-gear-ling-jian.html', 'tags': '', 'url': 'NX.html'}, {'title': 'STL', 'text': 'https://www.adobe.com/creativecloud/file-types/image/vector/stl-file.html \n https://en.wikipedia.org/wiki/STL_(file_format) \n https://github.com/omrips/viewstl \n https://github.com/topics/stl-viewer?l=javascript \n https://github.com/kaitlynhova/Three.js-STL-Viewer \n \n', 'tags': '', 'url': 'STL.html'}, {'title': 'CoppeliaSim', 'text': 'Opencv 與 Scenes \n http://mod.cycu.org  has coppeliaSim on Ubuntu desktop \n', 'tags': '', 'url': 'CoppeliaSim.html'}, {'title': 'Ext', 'text': '這裡主要是放入一些延伸內容 \n 包括電腦輔助設計與計算機程式 \n', 'tags': '', 'url': 'Ext.html'}, {'title': 'Fusion 360', 'text': '除了  https://onshape.com \xa0 還有 Fusion 360 也提供免費教育版: \n https://www.autodesk.com/education/edu-software/overview \n', 'tags': '', 'url': 'Fusion 360.html'}, {'title': 'Files', 'text': '.ssh/config \n Host github.com\nUser git\nHostname github.com\nProxyCommand /usr/bin/ncat --proxy p42.cycu.org:3128 --proxy-type http %h %p\n \n acp \n #! /bin/bash\ngit add .\ngit commit -m "$1"\ngit push\n \n 進入倉儲根目錄後, 以 vi acp 建立, 完成存檔後, 必須再利用 chmod u+x acp, 將 acp 檔案設為 user 可以 execuate. \n 運用 acp 執行 git add, git commit 與 git push 之前, 必須先處理好 SSH 設定, 也就是利用 ssh-keygen 在 .ssh 目錄下分別建立 id_rsa private key, 以及 id_rsa.pub public key, 而 id_rsa.pub 可以利用 sftp 從 Ubuntu 取至 Windows 環境後, 送進 Github SSH 設定處, 而 .ssh 目錄下還需要建立一個 config 設定檔案, 以便指定 ssh 推送資料時使用 Proxy. \n', 'tags': '', 'url': 'Files.html'}, {'title': 'Linux 指令', 'text': 'Linux 指令與 Mac BSD 操作系統的指令相同. \n 常用 Linux 指令: \n 必須熟悉 vi - 以便能在純 text console 模式下進行檔案編輯 \n vi acp \n 表示要利用 vi 編輯 acp 檔案 \n 進入後為指令模式, 可以按下 i 進入 insert 模式, 然後以 i, j, k, l 鍵移動滑鼠游標位置 \n 按下 esc 可以跳出編輯模式, 重新進入指令模式 \n 在指令模式下, 以 a 按鍵 append 字元, 以 o 在下一行插入字元, 以 O 在上一行插入字元. \n 完成編輯後, 必須進入指令模式, 然後按下 :w, 表示要 write file, 若使用 :q! 表示退出且不存檔, 若使用 :wq, 則存檔案後退出. \n cd cmsimde \n cd .. \n ls -l \n pwd \n mkdir \n chmod u+x acp \n', 'tags': '', 'url': 'Linux 指令.html'}, {'title': 'limitation', 'text': 'Ubuntu itself does not limit connections. \n', 'tags': '', 'url': 'limitation.html'}, {'title': 'Brython2', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython2.html'}]};