import React from 'react'
import css from './album.css'

const album = () => {
    return (
        <div className={css}>
            <h1 className="title_album">卒業アルバム</h1>
                <div className="table-scroll"> 

                <table border="1" border-collapse="collapse">
                        <tr>
                            <th bgcolor="skyblue">名前</th>
                            <th bgcolor="skyblue">目標</th>
                            <th bgcolor="skyblue">全体の授業を通しての感想</th>
                        </tr>
                        <tr>
                            <td bgcolor="white">山口 海斗</td>
                            <td bgcolor="white">ひとまず自社開発に勤める（サイバーエージェント入りたい。。。）</td>
                            <td bgcolor="white">講義の内容だけにとどまらず、いろいろなことを教えていただきとても刺激的で楽しかったです。</td>
                        </tr>
                        <tr>
                            <td bgcolor="white">鈴木 孝太郎</td>
                            <td bgcolor="white">エンジニア転職を来年の3月までに目指して頑張ります！</td>
                            <td bgcolor="white">HTMLからJavaScript、Reactと幅広い言語とチーム開発の基礎などを学べて、すごく貴重な3ヶ月でした。これを踏まえて、より知識を深めてアプリケーションを作りたいと思いました。</td>
                        </tr>
                        <tr>
                            <td bgcolor="white">松本 彪</td>
                            <td bgcolor="white">ベンチャー企業の会社でエンジニア就職</td>
                            <td bgcolor="white">基礎の部分から発展した知識まで幅広く学習すことができたのでいい経験になりました。チームでの開発は自分自身に責任感ありましたが多くのことを学べて楽しかったです。</td>
                        </tr>
                    </table>
                </div>

             
     
        </div>
    )
}

export default album