var numberOfSubstrings = function(s) {
    let freq = { 'a': 0, 'b': 0, 'c': 0 };
    let left = 0, ans = 0;

    for (let right = 0; right < s.length; right++) {
        freq[s[right]] = (freq[s[right]] || 0) + 1;

        while (freq['a'] > 0 && freq['b'] > 0 && freq['c'] > 0) {
            ans += s.length - right;
            freq[s[left]]--;
            left++;
        }
    }

    return ans;
};