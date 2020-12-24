import React from 'react'
import css from './style.css'

import { Link } from 'react-router-dom'

const Recommended = () => {
    return (

        <div className={css}>
            <header>
                <p><Link to="/todo">Todoリスト</Link></p>
                <p><Link to="/Room">トークルーム</Link></p>
            </header>

            <input type="radio" name="tab_item" id="tab_radio_A" class="tab_radio" checked />
            <label for="tab_radio_A" class="tab_menu">山口 海斗</label>


            <input type="radio" name="tab_item" id="tab_radio_B" class="tab_radio" />
            <label for="tab_radio_B" class="tab_menu">鈴木 孝太郎</label>

            <input type="radio" name="tab_item" id="tab_radio_C" class="tab_radio" />
            <label for="tab_radio_C" class="tab_menu">松本 彪</label>



            <div id="tab_contains_A" class="tab_contains">
                <ul>
                    <li>ポートフォリオの作り方が詳しく載っていてよかったです。</li>
                    <div id="iframe-parent">
                        <iframe src="https://www.youtube.com/embed/pnsieVYy72M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <li>忘れてはいけない基本サイトです。</li>
                    <a href="https://developer.mozilla.org/ja/">MDN Web Docs</a>
                    <li>自分がおすすめする参考書です。</li>
                    <a href="https://www.amazon.co.jp/%E7%A2%BA%E3%81%8B%E3%81%AA%E5%8A%9B%E3%81%8C%E8%BA%AB%E3%81%AB%E3%81%A4%E3%81%8FJavaScript%E3%80%8C%E8%B6%85%E3%80%8D%E5%85%A5%E9%96%80-%E7%AC%AC2%E7%89%88-%E7%8B%A9%E9%87%8E-%E7%A5%90%E6%9D%B1-ebook/dp/B07Y3FJ885/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=javascript&qid=1607577437&sr=8-1">Javascript「超」入門</a>
                </ul>
            </div>


            <div id="tab_contains_B" class="tab_contains">
                <p>CSSは、HTML文章の見た目にデザインを指定していきます。</p>
            </div>


            <div id="tab_contains_C" class="tab_contains">
                <p>JavaScriptは、ユーザーの動きに反応したり、複雑なことをします。</p>
            </div>
        </div>
    )

}
export default Recommended