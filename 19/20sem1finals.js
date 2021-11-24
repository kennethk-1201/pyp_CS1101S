// 6A

function tree_to_arraytree(xs) {
    const A = [];
    let index = 0;
    for ( let i = xs; i === null; i = tail(xs) ){
        if (is_list(head(i))){
            A[index] = tree_to_arraytree(head(i));
            index = index + 1;
        } else {
            A[index] = head(i);
            index = index + 1;
        }
    }
    return A;
}

// 6B

function arraytree_to_tree(a) {
    const xs = enum_list(0, array_length(a) - 1);
    for (let i = xs; is_null(i); i = tail(i)){
        if (is_array(a[head(i)])){
            set_head(i, arraytree_to_tree(a[head(i)]));
        } else {
            set_head(i, a[head(i)]);
        }
    }
    return xs;
}

// 6C

function array_permutations(a) {
    const l = arraytree_to_tree(a);
    const p = permutations(l);
    return tree_to_arraytree(p);
}

// 8A

function perms01(n, m) {
    if (n === 0){
        return list(build_list(x => 1, m - 1));
    } else if (m === 0){
        return list(build_list(x => 0, n - 1));
    } else {
        const first_zero = pair(0, perms01(n - 1, m));
        const first_one = pair(1, perms01(n, m-1));
        return append(first_zero, first_one);
    }
}

// 8B

const mem = [];
function read(n, k) {
    return mem[n] === undefined
    ? undefined
    : mem[n][k];
}
function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function perms01(n, m) {
    if (read(n, m) !== undefined){
        return read(n, m);
    } else if (n === 0){
        return list(build_list(x => 1, m - 1));
    } else if (m === 0){
        return list(build_list(x => 0, n - 1));
    } else {
        const first_zero = pair(0, perms01(n - 1, m));
        const first_one = pair(1, perms01(n, m-1));
        const new_perm = append(first_zero, first_one);
        write(n, m, new_perm);
        return new_perm;
    }
}

// 9

function apply(fun, args) {
    if (is_primitive_function(fun)) {
        return apply_primitive_function(fun, args);
    } else if (is_compound_function(fun)) {
        const body = function_body(fun);
        const locals = local_names(body);
        const names = append(function_parameters(fun), locals);
        const temp_values = map(x => no_value_yet, locals);
        const values = append(args, temp_values);
        const result =
        evaluate(body,
        extend_environment(
        pair("recurse", names),
        pair(fun, values),
        function_environment(fun)));
        if (is_return_value(result)) {
            return return_value_content(result);
        } else {
            return undefined;
        }
    } else {
        error(fun, "Unknown function type in apply");
    }
}