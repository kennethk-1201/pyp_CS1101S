// 2A

// qn : replace(1, 0, list(3, 1, 5, 0, 4, 1, 2, 1));
// answer: list(3, 0, 5, 0, 4, 0, 2, 0);

// 2B 
// answer: recursive

// 2C
// answer n

// 2D

function replace_2(a, b, xs) {
    return accumulate(
    (x, ys) => x === a ? pair(b, ys) : pair(x, ys)
    null,
    xs);
}

// 3A

function insert_to_bottom(stack, new_elem) {
    if (is_empty(stack)){
        push(stack, new_elem);
    } else {
        const temp = pop(stack);
        insert_to_bottom(stack, new_elem);
        push(stack, temp);
    }
}

// 3B
function reverse_stack(stack) {
    if (is_empty(stack)){
        return stack;
    } else {
        const temp = pop(stack);
        reverse_stack(stack);
        insert_to_bottom(stack, temp);
    }
}

// 4

// Returns the largest 2^k (where k is an integer) that is less than
// or equal to x. x must be a positive integer.
function closest_two_power(x) {
    return math_pow(2, math_floor(math_log2(x)));
}

function min_tiles(L, W) {
    if (L === 0 || W === 0) {
        return 0;
    } else if (L === 1 && W === 1) {
        return 1;
    } else {
        const largest_w = closest_two_power(W);
        return 1 + min_tiles(L, W - largest_w) + min_tiles(L - largest_w, largest_W);
    }
}

// 5A.1
// answer: 7

// 5A.2
// answer: 0

// 5B
function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let p = L;
        for (let j = 0; j < i; j = j + 1) {
            if (head(p) > head(tail(p))){
                const temp = head(p);
                set_head(p, head(tail(p)));
                set_head(tail(p), temp);
                p = tail(p);
            }
        }
    }
}

// 5C.1

function reorder1(A, T) {
    const N = array_length(A);
    const B = [];
    // generate B
    for (let i = 0; i < N; i = i + 1) {
        B[T[i]] = A[i];
    }
    // copy B to A
    for (let i = 0; i < N; i = i + 1) {
        A[i] = B[i];
    }
}

// 5C.2

function swap(A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function reorder2(A, T) {
    const N = array_length(A);
    for (let i = 0; i < N; i = i + 1) {
        while (i !== T[i]){
            swap(A, i, T[i]);
            swap(T, i, T[i]);
        }
    }
}

// 6A
// answer: 4

// 6C
function free_grid(grid) {
    for (let i = 0; i < array_length(grid); i = i + 1){
        for(let j = 0, j < array_length(grid[0]); j = j + 1){
            grid[i][j] = "_";
        }
    }
}

// 6D
function replace_string(new_string, r, c, g, expected_string) {
    if (g[r][c] === expected_string){
        g[r][c] = new_string;
        return true;
    } else {
        return false;
    }
}

// 6E
if (replace_string(current_player, r, c, grid, "_")){
    
} else {
    return undefined;
}

if (check_winner(grid, current_player)) {
    prompt(
        grid_to_string(grid) + 
        "winner: " + 
        current_player
    )
    current_player = "GAME_OVER";
} else {
    if (current_player = "X"){
        current_player = "O";
    } else {
        current_player = "X";
    }
}

// 8A

// answer: iterative

// 8B

// answer: 1 1 1 2 1 3 1 4 1

// 8C

function extend(bno) {
    function bso(s1, s2){
        return pair(bno(head(s1), head(s2)), () => bso(stream_tail(s1), stream_tail(s2)));
    }
    return bso;
}

// 8D.1

// answer: 1 1 1 2 1 3 1 4 2

// 8D.2

// answer: 1 1 2 6 24 120

// 8D.3

/*
a) 1 1 1 1 1 1
b) 1 2 3 4 5 6
c) 1 2 4 7 11 16
d) 1 2 4 8 15 26
e) 1 2 4 8 16 31
f) 1 2 4 8 16 32
*/