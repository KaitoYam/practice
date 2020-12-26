import React from 'react'
import css from './style.css'

import { Link } from 'react-router-dom'

import firebase from '../config/Firebase'

const Recommended = () => {
    return (

        <div className={css}>
            <h1 class="title_osusume">おすすめ</h1>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
            <div class="wrap_nav_osusume">
                <p><Link to="/Room" class="link_osusume">トーク</Link></p>
                <p><Link to="/todo" class="link_osusume">Todo</Link></p>
                <p class="nav_osusume">おすすめ</p>
                <p><Link to="/album" class="link_osusume">卒業アルバム</Link></p>
                
            </div>

            <input type="radio" name="tab_item" id="tab_radio_A" className="tab_radio" defaultChecked />
            <label htmlFor="tab_radio_A" className="tab_menu">山口 海斗</label>


            <input type="radio" name="tab_item" id="tab_radio_B" className="tab_radio" />
            <label htmlFor="tab_radio_B" className="tab_menu">鈴木 孝太郎</label>

            <input type="radio" name="tab_item" id="tab_radio_C" className="tab_radio" />
            <label htmlFor="tab_radio_C" className="tab_menu">松本 彪</label>



            <div id="tab_contains_A" className="tab_contains">
                <ul>
                    <li>言語に限らず、firestoreやwordpressなど幅広移動ががある。動画も一つ一つが軽いので取り組みやすいです！</li>
                    <a href="https://dotinstall.com/">ドットインストール</a>
                    <li>gitのコマンドについて漫画で教えてくれます。意外とわかりやすい。</li>
                    <a href="https://www.r-staffing.co.jp/engineer/entry/20190621_1">gitを漫画で理解</a>
                </ul>
            </div>


            <div id="tab_contains_B" className="tab_contains">
               <ul>
                   <li>gitコマンドの意味がまとまっていて、分からない時に役立ちます！</li>
                   <a href="https://kitsune.blog/git-command">gitコマンドの使い方 まとめ集</a>
                   <li>VS codeのショートカットキーで作業効率が上がるので便利です！</li>
                   <div id="iframe-parent">
                   <iframe width="1280" height="720" src="https://www.youtube.com/embed/cNyvefTJOcM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>【完全保存版】VS Code ショートカット</iframe>
                   </div>
               </ul>
            </div>


            <div id="tab_contains_C" className="tab_contains">
                <ul>
                    <li>初心者でもわかりやすいコードの基本的な書き方が学べます。</li>
                    <a href="https://prog-8.com/">Progate</a>
                    <li>gitがわからなくなったときにこれを見れば大体解決できます。</li>
                    <a href="https://backlog.com/ja/git-tutorial/">サル先生のGit入門</a>


                </ul>
            </div>
        </div>
    )

}
export default Recommended