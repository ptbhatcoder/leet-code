class Solution {
    public int numberOfSubstrings(String s) {
        int a = -1, b = -1, c = -1;
        int n = s.length();
        int count = 0;
        for(int i = 0; i < n; i++){
            switch(s.charAt(i)){
                case 'a':
                    a = i;
                    break;
                case 'b':
                    b = i;
                    break;
                case 'c':
                    c = i;
                    break;
                default:
                    break;
            }
            if(a > -1 && b > -1 && c > -1){
                count += (Math.min(a, Math.min(b, c)) + 1);
            }
        }
        return count;
    }
}