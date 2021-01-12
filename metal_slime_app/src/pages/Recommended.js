import React from 'react'
import css from './style.css'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
    },
}));
const Recommended = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={css}>
            <h1 className="title_osusume">おすすめ</h1>
            
            <Paper className={classes.root}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="山口海斗" {...a11yProps(0)} />
                    <Tab label="鈴木孝太郎" {...a11yProps(1)} />
                    <Tab label="松本彪" {...a11yProps(2)} />
                </Tabs>
            </Paper>
            {/* <input type="radio" name="tab_item" id="tab_radio_A" className="tab_radio" defaultChecked />
            <label htmlFor="tab_radio_A" className="tab_menu">山口海斗</label>
            <input type="radio" name="tab_item" id="tab_radio_B" className="tab_radio" />
            <label htmlFor="tab_radio_B" className="tab_menu">鈴木孝太郎</label>
            <input type="radio" name="tab_item" id="tab_radio_C" className="tab_radio" />
            <label htmlFor="tab_radio_C" className="tab_menu">松本彪</label> */}
            <TabPanel value={value} index={0}>
                <ul>
                    <li>言語に限らず、firestoreやwordpressなど幅広移動ががある。動画も一つ一つが軽いので取り組みやすいです！</li>
                    <a href="https://dotinstall.com/">ドットインストール</a>
                    <li>gitのコマンドについて漫画で教えてくれます。意外とわかりやすい。</li>
                    <a href="https://www.r-staffing.co.jp/engineer/entry/20190621_1">gitを漫画で理解</a>
                </ul>
      </TabPanel>
            <TabPanel value={value} index={1}>
                <ul>
                    <li>gitコマンドの意味がまとまっていて、分からない時に役立ちます！</li>
                    <a href="https://kitsune.blog/git-command">gitコマンドの使い方 まとめ集</a>
                    <li>VS codeのショートカットキーで作業効率が上がるので便利です！</li>
                    <div id="iframe-parent">
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/cNyvefTJOcM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>【完全保存版】VS Code ショートカット</iframe>
                    </div>
                </ul>
      </TabPanel>
            <TabPanel value={value} index={2}>
                <ul>
                    <li>初心者でもわかりやすいコードの基本的な書き方が学べます。</li>
                    <a href="https://prog-8.com/">Progate</a>
                    <li>gitがわからなくなったときにこれを見れば大体解決できます。</li>
                    <a href="https://backlog.com/ja/git-tutorial/">サル先生のGit入門</a>
                </ul>
      </TabPanel>
            {/* <div id="tab_contains_A" className="tab_contains">
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
            </div> */}
        </div>
    )
}
export default Recommended