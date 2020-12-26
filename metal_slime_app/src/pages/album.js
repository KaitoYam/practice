import React from 'react'
import css from './album.css'

import { Link } from 'react-router-dom'

import firebase from '../config/Firebase'

const album = () => {
    return (
        <div className={css}>
            <h1 class="title_album">卒業アルバム</h1>
                <button onClick={() => firebase.auth().signOut()}>Logout</button>
            <div class="wrap_nav_album">
                <p><Link to="/Room" class="link_album">トーク</Link></p>
                <p><Link to="/todo" class="link_album">Todo</Link></p>
                <p><Link to="/Recommended" class="link_album">おすすめ</Link></p>
                <p class="nav_album">卒業アルバム</p>
            </div>
                <div class="table-scroll"> 

                    <table border="1">
                        <tr>
                            <th>名前</th>
                            <th>目標</th>
                            <th>全体の授業を通しての感想</th>
                        </tr>
                        <tr>
                            <td bgcolor="skyblue">山口 海斗</td>
                            <td bgcolor="skyblue">ひとまず自社開発に勤める（サイバーエージェント入りたい。。。）</td>
                            <td bgcolor="skyblue">講義の内容だけにとどまらず、いろいろなことを教えていただきとても刺激的で楽しかったです。</td>
                        </tr>
                        <tr>
                            <td bgcolor="orange">鈴木 孝太郎</td>
                            <td bgcolor="orange">エンジニア転職を来年の3月までに目指して頑張ります！</td>
                            <td bgcolor="orange">HTMLからJavaScript、Reactと幅広い言語とチーム開発の基礎などを学べて、すごく貴重な3ヶ月でした。これを踏まえて、より知識を深めてアプリケーションを作りたいと思いました。</td>
                        </tr>
                        <tr>
                            <td bgcolor="yellowgreen">松本 彪</td>
                            <td bgcolor="yellowgreen">ベンチャー企業の会社でエンジニア就職</td>
                            <td bgcolor="yellowgreen">基礎の部分から発展した知識まで幅広く学習すことができたのでいい経験になりました。チームでの開発は自分自身に責任感ありましたが多くのことを学べて楽しかったです。</td>
                        </tr>
                    </table>
                </div>

             
     
        </div>
    )
}

export default album