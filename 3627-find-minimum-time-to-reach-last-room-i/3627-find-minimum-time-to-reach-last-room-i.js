/**
 * Approach: Dijkstra's algorithm with binary heap
 * @intuition Use Dijkstra to propagate minimal time to each room under waiting constraints
 * @approach Maintain dist matrix, embed min-heap via closure, dequeue quickest node, update neighbors with wait+1
 * @complexity
 *  time: O(n*m*log(n*m))
 *  space: O(n*m)
 */
const minTimeToReach = (moveTime) => {
  const n = moveTime.length
  const m = moveTime[0].length
  const dist = Array.from({ length: n }, () => Array(m).fill(Infinity))
  dist[0][0] = 0
  const heap = (() => {
    const data = []
    const swap = (i, j) => ([data[i], data[j]] = [data[j], data[i]])
    const less = (i, j) => data[i][0] < data[j][0]
    const up = (i) => {
      if (!i) return
      const p = (i - 1) >> 1
      if (less(i, p)) {
        swap(i, p)
        up(p)
      }
    }
    const down = (i) => {
      let l = (i << 1) + 1
      while (l < data.length) {
        const r = l + 1
        const j = r < data.length && less(r, l) ? r : l
        if (less(j, i)) {
          swap(i, j)
          i = j
          l = (i << 1) + 1
        } else break
      }
    }
    return {
      enqueue: (x) => {
        data.push(x)
        up(data.length - 1)
      },
      dequeue: () => {
        if (!data.length) return
        const top = data[0]
        const end = data.pop()
        if (data.length) {
          data[0] = end
          down(0)
        }
        return top
      },
      isEmpty: () => !data.length,
    }
  })()
  heap.enqueue([0, 0, 0])
  const dirs = [-1, 0, 1, 0, -1]
  while (!heap.isEmpty()) {
    const [t, i, j] = heap.dequeue()
    if (t > dist[i][j]) continue
    if (i === n - 1 && j === m - 1) return t
    for (let k = 0; k < 4; k++) {
      const [x, y] = [i + dirs[k], j + dirs[k + 1]]
      if (x >= 0 && x < n && y >= 0 && y < m) {
        const nt = Math.max(t, moveTime[x][y]) + 1
        if (dist[x][y] > nt) {
          dist[x][y] = nt
          heap.enqueue([nt, x, y])
        }
      }
    }
  }
}