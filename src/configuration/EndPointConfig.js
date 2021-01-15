const EndPointConfig={
get_trending_post:'https://www.reddit.com/api/trending_searches_v1.json?withAds=1&raw_json=1&gilding_detail=1',
get_subreddit_list:'https://api.reddit.com/subreddits/popular.json',
get_popular_posts:'https://api.reddit.com/r/popular/',
get_subreddit_info:(param)=>{
   return `https://api.reddit.com/r/${param}/about.json`
},
get_subreddit_posts:(param1,param2)=>{
    return `https://api.reddit.com/r/${param1}/${param2}.json`
 },
 get_user_info:(param)=>{
    return `https://api.reddit.com/user/${param}/about.json`
 },
 get_user_comments:(param)=>{
    return `https://api.reddit.com/user/${param}/comments.json`
    
 }

// get_new_posts:'https://www.reddit.com/r/popular/new.json',
// get_top_posts:'https://www.reddit.com/r/popular/top.json',
// get_rising_posts:'https://www.reddit.com/r/popular/top.json',
// get_controversial_posts:'https://www.reddit.com/r/popular/controversial.json'
}
export default EndPointConfig;