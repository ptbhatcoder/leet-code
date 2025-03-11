class Solution {
    private long countOfAtleastKSubstrings(String word, int k){
        long result = 0;
        long n = word.length();
        long a = 0, e = 0, i = 0, o = 0, u = 0, consonants = 0;
        for(int right = 0, left = 0;  right < n; right++){
            switch(word.charAt(right)){
                case 'a':
                    a++;
                    break;
                case 'e':
                    e++;
                    break;
                case 'i':
                    i++;
                    break;
                case 'o':
                    o++;
                    break;
                case 'u':
                    u++;
                    break;
                default:
                    consonants++;
                    break;
            }
            while(a > 0 && e > 0 &&  i > 0 && o > 0 && u > 0 && consonants >= k){
                switch(word.charAt(left)){
                    case 'a':
                        a--;
                        break;
                    case 'e':
                        e--;
                        break;
                    case 'i':
                        i--;
                        break;
                    case 'o':
                        o--;
                        break;
                    case 'u':
                        u--;
                        break;
                    default:
                        consonants--;
                        break;
                }
                result += (n - right);
                left++;
            }
        }
        return result;
    }

    public long countOfSubstrings(String word, int k) {
        return countOfAtleastKSubstrings(word, k) - countOfAtleastKSubstrings(word, k+1);
    }
}