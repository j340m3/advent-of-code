(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Debug$log = _Debug_log;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $author$project$Year2023$Day01$compute1 = function (input) {
	return A2(
		$elm$core$Basics$always,
		-1,
		A2($elm$core$Debug$log, 'input', input));
};
var $author$project$Year2023$Day01$compute2 = function (input) {
	return -1;
};
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$length = _String_length;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $elm$core$String$startsWith = _String_startsWith;
var $author$project$Advent$removeNewlinesAtEnds = function (string) {
	removeNewlinesAtEnds:
	while (true) {
		if (A2($elm$core$String$startsWith, '\n', string)) {
			var $temp$string = A2($elm$core$String$dropLeft, 1, string);
			string = $temp$string;
			continue removeNewlinesAtEnds;
		} else {
			if (A2($elm$core$String$endsWith, '\n', string)) {
				var $temp$string = A2($elm$core$String$dropRight, 1, string);
				string = $temp$string;
				continue removeNewlinesAtEnds;
			} else {
				return string;
			}
		}
	}
};
var $author$project$Year2023$Day01$input_ = $author$project$Advent$removeNewlinesAtEnds('\nzlmlk1\nvqjvxtc79mvdnktdsxcqc1sevenone\nvsskdclbtmjmvrseven6\n8jkfncbeight7seven8\nsix8dbfrsxp\n2zpcbjdxcjfone68six\nzqmzgfivethreefdnlhpeight8798\nfivenineone6\n6sixzvdsprdqlftwonine\nlqztrmztwo8dg\nfour6onerv2pfhm\nplvzrs5\n5282gdnc918\npskjsrchjpxoneonenine96fivefour\nfivefour2hhtprpjndm4\n6qbdcfdjsd1lmldklflteight\ngctgdhpkkjninekj65rkqg8\neight6gcjlsmzt5\n5chvmhmfgl7xkjfdpdbp\n5tpzpnrgpftrnine\nthreeonehqbzktq1\n685fivetwofour4lvgxgdb\n9jdxljkfqttstqxdzdsztsxrfjbkqmmsqzseven\ntwostcllbpndtwo15seven\n8fivetwofivetjfvsxzs5kdkpxgxvsfhr7\nsevenlvrc2fivefivesixqkzdkrfour\n45jjpmnscmmk\nlhxgbfjtcknpvz6\ntndgnkcqtjbrzgbrfjr3fiveqxlktntzthree\nvqb6threeeightbdt\n1eighteight7fourone8\nbcmqn9onecnrzhsrsgzggzhtskjeightbz6khfhccktwonenrj\n6qmgkbkmlxfourprhxrxrdseight\n9three479\n9two6zhtjzfmjrteight\n1fiverrxdmvfvxhs7jqzzqpcflzt75\npnjmlpbbeightskgdf6one\n6cpzqzfsjtpfq135\n484\nllfvhxglfivesixthreenseven36\njhcpt9rq7fhzbnhk\ntthree5lrgtbxxvonezfmdpseven2\n67jmrxfdmfbmzsixkzghng\nsixthreefdbzhslqone2sevenfoursevennlnpjgsx\n54zrkfbfq\nsix7rfpfbzbghxcnxlnfjkznine7\n8dfoursm338cz\nsevenfiveeightone68\ndqmvcbdclx23653\neight58qgjlcvflrggndskff\nshmmk28\n93eightdtgcnhphv1\ngdtdjgggtj3dgrqsmvfh\none3pksbh32three\n9kkpjrmhmmlzvqngnhftwoonexjqmnfive\nrlsevenblrvrk7\nnine9hqmtshkjdhs\n93fdbrbnnvxsktggqnjfjk7brsncmxkcfzhm34\n248twofbkfpxtheightwovng\n28746threecbffiveseven\neight449\n4eightnine4ptmzvpfqxhrzvrpjhfsdsvlhbht\nsevensevenfive6bjf\nsqthreevhmvbgxvnk2one\nghpsix5seven31\n7llnsgdtzbxjbbqcmxfhgcdnptwothreeone\neight3fouroneplsrfvqf\n4six6one\n27twofvlssjbsk8j\nnjlllqnrvx8four\n5onekcngbbmpnxseven9fourzcprjp\nsevenfive2sevenknzpxtx\n8eightljhtmnxpjhxhnqtwo1rjddcbj\nmzsqh3sixfivethree\ndeightwoeighteight5\nnine42sevenscnjeight97\n2gcrkrfourfivenpzssevenseven4\neightdtwosevenmj3two\n9zkhqlcd3\nctpncdkcmonehfive9\nsixrtwo7rqnine689\nsevenm16gshq4xqdxqbhcl\nzxxnrpstkkmnhcc6\nthree1sixninelsxrbkpneight\njzkfvrtmctjz5\nsdsfrh4nine\nfoureightfive7six\nninesixfivefive53seven\n42threezpvxnrg5sfzctbtk\nseven7pkfnqggvjthreextfksczdd\nxsb6ntlfzxvlxrkx1sevenkmnqxhcdnqkdzt\n6sbzfqfdm\nlrfjxppqbdseven94ntnskpkdqeightsix5xskh\n98czzcq\n696cmcdpztwojk6tz\njbpfbqfdd64four2onezrfm\n9jfklkpcffive5phpzqvhrtcqvmxvmgljn8\n329sixjglqzqzjnlsqbnqnzsb56\n59three\n4863five\n6txkcgtn7gtsxgtnine\nlxdtnjvjbgxpnrft8eight2cjqfdtrk6dm\ntwothree53\ntwo1qf4\n6ltxhxcdfive\nrlrdkzgnk6mnsbxfkhh\n41z4nzcqzjqrnmsixtrrbgtwo\ntbnsixsixtwomptdjtzkxfhlflpcdnbmrbctjscxq6qtmjmkpfk\n1vqlkjtmjeightcjzxnzscczqmxcpvnprhtwo\nlznhcphkdmrhpninesix344\nfggprsvtgmbbtlk14xkrnbcjrdbrsbdltfztmtwo\n6rqlzs34cdlzmxone\ntwo7zpbgsxl\nlckblpljvv5two75fivegttgmvcpmlhltxz\nbjfbxdpvnj581three\n1seven4\n8ninezhzrgg6crlpggmtfour41lhjcqtblh\nseveneight8sevenoneshvkcdhgfmxhn7dzccsdfkcx\n7zljpgl2\nsix1two\nfourztcnpn8bsbzfhdhgkjjsthree\nonepthfrh9vcs9sevenhljhmprhlsjrr\nvlnpmqlpjfour5\ntwo3qfourlqsninethreefour\nhshdseven7\neightfive4five6four4flrzhrxzlreight\nfive187\nseven2xlbqkhtflqtsfhrf1vvnbt\nonefiveninethree26\n2sck1n9eight6\n6sixsix7two9xznczchmx\n27eight\n7six3\nztlbbncthreeseven54three\neight8r6mcrcgrz51\neightnines6nine75\nnhx83fivetwofivefourrvxqhnpeightwoj\n857sixzrnine6dlprzx\nlteightwo2132seven7oneone\n1516ldxxftfnineseven5\n6fourfivej3\nsjmjp99\nbprsznhxztpp51\ncmfivetwo1four\n6mgcffzzspll15djsoneseven\n9qjcvfourqdtmhlqzfxfg6\nsix45fivetwo3zkpxmxsgxtmg4\nthree12four72kvztxqdmfxhrxsp\nthreeninebnzthreedfqvm93kqmxpsnmb\n8nzfbcmghfive92\n914six\nsevenfive6\n3bxxccqzdjsfive78lhtpbl\n5zdvjxsfvcptngh5\nvboneight4six17\nseven8eight9krfhll3lnine\nstv4eightonesixcfveight\nrnmjpszvx94fivefzsphkkftgxpsfhvthsbv\nzmntmkcbgrtwonspdq7\n5ntxnjclc8six\n8six58five\n6ninesixeightqjnjfbbtlmcqvthree\nhgjh9vhtdtcgkzpltnpxfqhsix7kq\n64sevenc9\n96z62ninenine\nsevenseven38\nckk9zdnkjvskct\n8flk7\n8eighthqntfrh\n8cthrxbjlxbnqvqc496htsltqpqktqnz\n31threetwo5\ntwofour5\nrlggcjdthj3nine\n18five4\nsevenhgncfjnseven1twoseven\nkshqgsm3pcd518\n8qrpbpbbmzmbctsmvtddoneninefivetwofttd\nfivetwoqvtscrs133two5seven\n6ninedcsrftdtwofivexzmpxdccnine3\nthreeseven73\npppkjkgt3\nseven2six1ctmmjvdgj8h9\nxkpk3fivemgmrfph\npppgfivesixnineqxs6onebgsplgfhqp\ncvjq15threesqqtpczr\nthree95\ntwoldjbdxnqncntpphxshbthree767kfqbsqhlkg\n9lfhbgmcqnhhlvvpvdtwo37\nv7gj\n23fvgbbdjgst8\nsix3frmpq\nzrggqtwo6sqr8\nfiverdrxxtjlhzn97fxsqpxf\nsevenlpb2sj3one312\nfour6six9fourjbsix7fnr\nlpbgnkhkkbninec8three\nspvkzsthfour2\nljbrlhtkxfkskvdbgxqmmjn3nineqmqtffkfive9\nh1jmxtlfivenine1djqrsnpqccvzmdhsmxnqrjlgdlnj\n8threeseven\n1onefive6one71five\nqbjqnfsevenmls8gdnr66\njgpzsix76pxldgpcvdcpzn\n8nkdjhgrn\nthreeeighteight79\n9ninelzzrjqpkseven\n75six\nthreebpfsn3three\n4twonel\npjvmb14tzbz2tpfourfourseven\nzslfour1pkklkrsixncvjtkn\nhoneight3\nsix7stfffkjg\n42fourktbdmzstcgmdtcgbhffthree\ntwo27\nghvrgzj6six1\nvxjqk3xhlr3\nthreetgzkjslbdrdxgfzsd3lcheight8ninebxhzf\nsixfive7one\nf5\nqq6lkvlmrnseven9three\n8fournine64rzdnnhgdsixseven\n4vttbdfivesgdnjsvsxt6\n765\n6czbdlfcfkvplmcb\n7one52\neight6neightone\nsix5lttjtcbxmxnz\nthreetwo692eight\ndhcztvmmlllg8four\nbtdjgnh9vjvlqfkznqr635hhcr\n2jvbxcfournine\n4sixonemp299sevenfour\n1sixmdqkzqtgzeight7nine9\n4nnhfkrlmfpseven\nblhvfourtwo5vrlqtqrlpxgd\nkptg4eightvglvjdczfive\n5599msgkplgqfnzseveneight6\n3tnfvgftsnbzksnrhtrtlbfxcfqfjgnndlmfvkqvhcmgdtwo\ntxvjfglxtbfive3zpx19\nsix9four5\n5fourseven\nfsevenmnfskhckvfszs73rnjqjhsseven\n95knstccbfivepgpt\nkmtjfxtztqnrngxxgcgh1kdxpdjzspz\ntwo2rtcmvpbzsmfourchpqthree99\nfzteighteightlvnoneslhjmcrqrg8pzvszdxzbp\none49szrxcjvtt3eighteight\n8nqbmcsthreeninexf7\nfvvzvpmsgrrnhjksf8l4\n7msxhtdk\njgtwonetwosixthreervlmxlnine869lbqzxpqqn\nnvdn6bdg9ninesix\n82rxtf\n9tdqsdppseven7one\ntlbbxvtwo8one671bhghlhdpfh\n3onethhhlmgfhseven\nn2six\n53eight\none5five85\nthree5375nine55\nfhvxvtjcnn3stcjhsdjtc1hhmk\nsix1jmgzrklbxrmzshpfgnv94hzfd\n737six\n25nine\nfivevnpmlzvvp118lbv8xzplfttx8\nninethreesevensevensix4three2\nxkgtqqlcdr51bgtx\nsixpddqmbb5onehbmjfbpqx3threechgvdkghhjhnxl\n7eight9sdcq1\n9ninejbcxzp\n3two2sixone\nseven8fiveonecrcqrglql141\n4nine3cllndctlninecrdxsevenbhbqsgtjnchkmknpdht\nsevenzfbnvgfive3threesix\ntvvjkskxgvfourxhccmmpxqx8mtxmfxmrcnine\nptnnhktxxn2qrjvmddszgcftlpdfvxcpkm\nmboneight8lbjvvfzrl8qgqf\n7twomjfhzl\nsevendrdvmx2ninethree7seven2\nzoneight6eightnldnvhqpbd5\n29c\nkzfkvqqs2ninesmlcrg573five\nvxcgdz24ljhrhgsix6\none3nine53xtr7seven\ndjdeightwoeightc2six6nine\neight2727seventhreeone\n3gdtc7llsdlftdrx\n581vjcbpmrzlp157jjcmlrzhr\n7eightsix8fourgg69\nzsh38twocvklone\nthree6np\n9tvxqtbpf77one7149\n7three3gqfpfqmhsfxqbqbnv\n8rhflhmhtbm\n217onethreelgfmpdscnine98\nthree3stnst6xqqxvxzkfssevenbzktd7\n46ttbnzlfnsjbc\nbsqxtvhgthree58four8seventhree\nccntwonedsjvftmftwoeightfourbxxt5eighteight3\nthreeninembphrpfourone13hnjvn\nbkm2onez6xxdjvnxvxjrtwoeight\njztoneight8gsmnjcfvk\nsix3fourninetwo62\n99dndgmkcctwoneftn\neight7pkzcxqhzfiveppvnineksjfhhqgm4\n2ngrttwozgdsrdsfq5ftgsq\nfourdnmxjn5997eightkxkkpseven\nrxnrnqvm98zjxxmkflone\nthree1dkmtwoone\n6tttkrtnhgfzx8five4shlcvhr\nnffggbxmhkpcppm8kjhktmdvlkkmrffdng254\nmbjm445\n6nfqxlhklrmfour7\ntwosixsqtsfcleight8onefdsjxvbgt\n9bkkrznine\nfivedzpnp1\ncctxzzjbhgttmszdph1sixqseven2\n1qnfxpzfg2feight\n5gdj3shgqvjdsix23gqp\nxdgxsrshddmzmhkhznsdthree4one\ngmtsixsixninexxsxone7three2\n1rttbtsccr\nthreeseven1fdzqvmbnsfive6\nnxqxvhsix41385none\nsxgmkrzmbvn4sixfive5five6six\nthree6threepdjsseven3kgxtwo\n8grzmhsmkthree\nseven1htzbglcdfbcg\n5nsjsnrscz1zhrvjmtg5onefive6\ntwo4one\ndzl41four3threehbbqnkhn\nonebsm86\nxh2\neightqmdbfiveqv21sevenseven\n5onefour3twolrtmmonetwo\n32seven\nvpcncrhjxgcs3sevenninenine5two\nmponeight9glbvgrff\nzgzzzpfffneighttdcplkbfr57\n7nineninemfneight\n3ddrsxrmbzsmxkdfive8\npnxtxmfrpmtwo3\nonerktgpv55\n79twosixhnnrqklz98\n5915vnrpsj\nrfg7szlxneight\nninejhnzpnhkrlqceightfive5\ntzcgzzx6two3qfk5dffgnp\nceightwothreerqnfl5fourdfbrthreedntdchgnine\nsixnfmdk3sixthreekgvmrzseven1\nmcdbsqnrzconetwo1dthreeeightjfjdblk\n48threejtdnq\nthreerxnrgzd9\nvmzgfplpveightfnctwo4pptlb\nninesixqtbqgjvqv1three8\ncfnlshzvczgvm1onefive\ngsskzxkgrbzx5pggzmsfhtwotrsvmttzdc8three1\n3sevenfrc7vzg\ndcmxmg7d2jlbtfhkr8\n62nzzeight9txrzlm\n9pjllhmfgkvssixsixthreeqmzthree\nctjksjbbdn28\n39fivefive5cnqjtr9vpvsix\njlbjfouronent7mlpqpcvqcmhfhvqjqcmtwo\n2kpvxg6nine\nseven4mlsbhzcmjfthree8\n1khfjhp3fourrh\nninesixpfrjvfm8kkjsrhttxsslhtwoeightwovvg\nfour2nine\nfourlgcbfptfz45nineeight5eightkqtbt\n5sixxqggppnl7\n51zvfive1v\nfiveoneqqk5seven7four3five\nkqlkrntrcfrhtwo9scczeight8dbqmfhstnzq\nghdjlnzmskmvjeightnzmpbjgone61\nthree8jrhhmfnfive3four48eight\nnine87ninekfzh8\n329nine\njgtwo3xvlkbvhrss27vltrghkljq1rkzkls\nvrcfourtwoqlgcrxf274\nsxzkxpvnhsixsevensixtgptbrpnfthhnj15\n5rqqntzlq1one\n1pnine762fhone\nttghtthree5eightbqm4two8\n2pmtldtwo6onedtsklbcbjhone\nfourseventhtdcsmc5\nxqp75five99g4\nmrjpmm4crgk212seven3\nqjpdjb1\ntwo44sevenqtcdhxjp35xxx\nsevenvtd7ttvmsninergrgdxbdqcthree\npgkqpltdzcthreemzrsrqjfourcrghhsfsjcqtmvxq4\nthreeonexfrdvr1nblctsevendqmmzdr2\n8three2six8\n59twozjfour2\nqgtjgmrvfcffour29four5six2\nzzhnine3nineknzkvmbxvm54fivelrrgc\nfonesix3three\nseven6fivetlhhonetdzrkhjzqzseven\n1ldxvjseven9eight5\nseven2bcbktzsjpp\n2kxqxflk55two7cflfdfvsx5six\n5lvhclqxtf\none768two\nvfh8\nnineseven3xpc2jkvmgkqc6two\nvvcvzfb947twortlnl96\nseven58nine4nine8tbtjqfpgp\n7onefive4lbhslhdpsbtwo3vm\nfoursixsix3971fiveeight\nnrqxrffqbp15\nmklsgg3oneseven6eight4bnbfxf\n9five5klpzgrccnxvd96three\nsgbqgrlqreight8\njlvrfrskmlrdtdpr4foureight1xccgtcf\nfive5threek4hsmqjq\nfive6pxqlplmtvcvjgtbk\n3sevenninefourone\nnbrthreeone9gxeightlrkfvgtzhtwoqvnfb\nteightwo972hrdrlgn5mpbjrxprpkjxgdkghgrgbthree\n7nzgktdsvkjlqdlonergplcdqvv\nkzxttx3fivesevenjdlqz9eight\n9slfgkbdmq24nh595two\ntkbnjhjrfivekqqxsjleight1\nseven23kh2tggrone\n12four1xcvkxbcv1four5zs\nj7ml\n8eightone58dnxhddzstmfleight\nmtd37fiveeight3fxcbcd7\n2fiveeight\nzkmvsnsgnine321mtbzzg\n4tgzhmf9\nthreexjqtqzgzj4kvdtbpjv\ntwohmnpsqbdcrbl35three4seven\n2twolpmdnxmcps8fourttfrhzzx\nonegqsqrhx2twoeightcxmnxvzsfivethree\n2eightseven92sixcjmkzjsl\n9gncpkg\nsix51eightfourkmqbrrkkrjzmhgsevenfour\n9bhxxzseventhreesglvvpjmc83eight9eightwomd\n164cndtzcrdrxfzgnvqkvd1threefive\n43sjlrhsrthqtwoqrxkqsixsix\ntwohfbqjxmc3four161three\n4ngvsmdvm\nxmhkgqdnfbdxcxm9\nlqgxmshjzgggj9jsqnv96one\nvt2znbmqonesix1gjppfmsevenone\nnvdjzzlspjthree8eight\nqzvtwone1one3fivek\neightlfztsninepxfstsxtthreefourthree7\nk6\nzmeight2\n3cblxxxthreethree232\ntwo6sixcsgnzqbttjdzqs39oneightdr\nbnjzfkmfh8ndfssix2pff8nctdvdqk\nspxskgfmtgghlmklqzz6tdgxnbnnxfmgnfiveseven\ncqrlmd62gsh\n6rmrzkv4\nnineone6dbtzrtsp8sixzrhjhkrhvsxktbdkjcrone\n5pvhbxqdvvqhlthreejqvs2\nlmeightwothreesjrsqgsv9\nseven8two92eight\nfive9sixeightonevzqtzq8tcgpbgthzvlcld\n51ptkkdnzhgp\n7jkrtwofourfour\nxpzvfcdv1jvbd5mgvchdbnd9chlvqkc5\n27threectsxpfd12eight\nprqbfh3foursevencgmhkmkd12\none5seven8threegqcznrrxfheightfvkjkssbch6\n1vgsixeight3sztxzjkgldmqqbrm3\njjcpponejtxkmnmggtfive3\nsixlsqgmqkjjzrpqj3dgsrpdzj3mjkdqhpq\nslxstvfive7nfst\n6fiventqxzhxkfivekcdbhrkx\nsevenjqmfmbjfoursixcx7threexspc\nkgqjjxfkmhqtf22htnvmpgxsztbb5\nnineqzgzsscrrfngnzksfour1\n9threerq4rhnbmhhsoneseven9\n6eighteightmjbthree5eight\nthreexhzqqs2kjdqvjr4\nz3ktworvbgbqzbpt\n2onefive6\nc69492\neightsixnine8tpjcxmpln\nmxxfpjsplj3msxqdnnbcbbqxfzs5ninecmjpzq7\ncnineninesixfive3seventwo\nsix18eight3eightfourthreeone\n6zdtsqkplv41jmrk7qkgjpkqgmmqsttvrhkzone\n7threenvbjsvbshmd4sxffiveqvvctwo\ntwo2two7lpmsjl4\nsixceighteight71psffhzjdjrm\nseventhree2eight\nqpmpfdlr7\ndxtzmkcrsix5\n65oneptbzdxcsqseven72five\n7bdmgtzdmtwotwoseven8one\n14sixckthree1n2\ntwotwo5hpqhmnnjbsix35\none5twothreeeightglqdbjlgkseven\none4twokzbdzv\n8mcv71six58kkxdqx\nbgbvdrfsixfqqvnlptzrqkhgmt8\n37oneightrmm\n3onefbtvqchjthreebhxpvlqcdqh\ngjcninercqpvvzdfkcdcfv2\n13fourbgntvtnxmr\n8447zdxvzfkft\n1foursix\nthreefivetwoseven4eighttsxflbcqtnfourthree\ntseven1twolzjkfdttfklsdzrrflnfxfgvlq63\nfour9fone9twobhppd\nnzcvxgjqrsfqgkktggdlnine5\n57thz\n3threeseven25\nzsbc6fivecqvlhtwolqone\nnnsoneightdnine6rhckhj23fjj4\ncj1rbxlggxxgtxxbmtgfg6two\nvhkgpz4\nnrmskeightone9six2clhcjkcl9jk\nonejvdcrf96hbv\nseven8three55\n1sixtwo79\njcqknvjppbxsphlxrrcbzmkqnine29\n2fourvgzhnq\n2six93rdrkfjkqlllx6nine\n77onevkvqhvptbn\n32szxlxdc5zlrtjdqpt5\nnine75hzkzvdseventhreelxt1six\nvdbgshtjm8grgllht4qhpkhdfour\nmrvdgqvseight3jtzfdspdtrkf\nkcg2twoonelcpxlg\n2xlcjcxzczt\n1pszcvn12sxmcbdxznpeightxvdjjbgrjlpdv\nfourbsbkvnineonesixthree8\n945five5one\nnine71gzq79\n3threeeighteightldqcgtbd\ntwo671four2r\nbbfpvdsvffour5two\n767l97hm\ntwofour5\nxxrs931ckbg34g\nqhnht4\nnine723nine9\n93preight5f6seven\none8qncpgpl\nfiveeightsix8jr2\ntwocdv9lrtsbcdtvz62pkzm\ndmhfljxqxeightxmbprh2\nrr5\n5twotwo\nthree8two5\n4rjqmbdtxv42twoeightseven5\nfourb349six\nf31nineninetxtdtfivehc7\n1one3\n2eightxztclpbvkp\nbkxvnhhn6nine211\n1twoseven3xmzg\nlnzpnine54eightwoqpr\ngnhdcgdmvthree9nine\nvlxjmdc1fivesix\nnineonefour69\nktdkztzmmcgxslggh7dhptrkgfbqnine3two4\nqfczhgjnt6\n3fourrzmt\nonethree2four3nztsmbqmtldgonenlc\n29six9xlffbvfntz85\nfive6trqbjkhjfmrlgpcxseven\nthreegz9chglg6\n9tq\n1onefive8two84ngrh\nhrqhreightfive1lp\nonethree4\ntwo8psmqcbsixsix\nsixseven3xxczmccll\nfourmmlcgbkhktbmrp5three\n27sztxgmqdvnfivelfcpzjsx7one\nhdbhrqhhffbgjxvdpqk6sevenbn\n93ninezmtrgjqbsp74\ngsljpvzxkq9\nzbjzzrnkbeightseven1four\nfourfivetwothree2rh5\n155cqrh1\n1tjdeight\ndvnlk78cbvdrccmmx3seven\n8seveneightsix\nffjlhcgxp97plmttszkvj7jvtsgsevenznl\n121four\nthreetkqnxtwobvbmzj4ppkdxqtblszmxqhqbv\n5sevenxgcgqnlpkpnfmcnkbfbeighttwosevenhpht\ngkgnfiveninelr5eight\nsix4nine73szmldmdd\n9jfgcslbrcz\njrgrnmntmtwonptz8eightninesix6\n238eight1xtjdgb\n2one66fourndjcxmmbhfcq1\n5bmfntsevensix\n5832663v\n7sixdzmhfrjonebdqlqh8threeonenine\n92six\nvqpg91hspvdgtwol\nfivembzffnlcktwo18four7\nsix99nbzrgd8\nonexqflrlvdmrsix9nbl1szkf\nvqmlzjc1d3\nthree7two4vbgzthree\ntwoninejbbxhdfnbqjddj26one2\n5nine296ninefourone\nonevznthreedbtjtgxhh36sevenfour\nzfkffkjsz7btqgtm1lqvsix74frjhrkbjj\nsltlgnine6fiveninegglpc8ninenine\ntwo7three\nfourbrmdvfbtnnnhr1mnhbztwo98\nnine6slnine\ncqkfp35hzrdlcpcsjhssdlnjv\nsix42seven32five\nzkhjblqjlsfive9kbxzhjmnzrxbrrj6sevenjdvljbh\n9ldrjmjpqeight4pnmcfvg3b\nlone8\ntwo1sixfourgskrlfkxxdhbjspmhg\n4hgceight2one52jmbmjkjb\nsix8zfbjxfckfivesixzrpn3\nvbrbvv6\njfjkvxcrbjhztvtmjbp15two6one\n3xvhtzgqpn4td\nxthree44\n68973one7rmx5\nptbndknk26two8cv7seven\n57417four\nngeightwopgdtlxjgs3threefivefivesk92zgcmch\npmfjgxpg6ninefoursix\n5hlgzgrxhxxqt8\n1nine3\ngvdhxthjxnxv7dtzninenine4\njrtwonehzddmgcjsn6rzldcsfpqs8eight6six\n5fourfive\njn6\ntwo2four\n567ninefive5fivefourdrbh\n36sevensixkbphcrstnine\n76svmjhhkrt73\nthgzhsclsptfqfzpsnine4cxxpv\ntwo1one8fninefdctxpmtk7\nseventpxmbxcl9\ncghxxdnnf7vmvqdfhhxznine6dgt\nsoneightsix7\n7ft3threeqdhxjmkgd6vgfmb\n1threesix5lzjzrm\nfiveonedknfvkphltcxnsvxpvxlxldxrqftcmqvvqx6\nsone1tnmqklzvbbctjvntddpm3\nnine9vb\neight52threeqnhhvn\n87fhkjhseight485\n1onesixzczvlsmhbfour7\n3ztseven\n7tjjbq2three\nsevenv1eight9cpvmrn8oneightnxs\n1threehlhxjj2eight\nsix87twofour3646\neightzlmj2zreightbflxtmdbv\none2eightznone\nseven2eightvlxkqnpjb7dlqrmnhtfive1seven\n43eight3\nfivesixfiveeightsxrvgmpshvone7\n7dpmrqeightone1rdfdrx\ndtmtpgjll136dbcjlrhzrdnm7svlrdrcngpnine\n5dl9\n94ctwo4four\n7ninegnssldmnmqc\nnine1sevenzdvkpxxsfccmb\nnone5five1rsrsxpxnlt1lxtf\nsixpl9nhgm\n51brpphslhjtwo2stjrkphcgrfive\nfivetdhlrcbtwozdsfgcdnhv67fivesdjlqnine\n4fourfour7sevenfourfivenjdxvf\n674one46\n6ninentdksjfkdvhkkxzrgftnbjmfsjgzd\n4ninerpvfmfonetcnhk\n1ksbmzccfreight5\n3vqr\nninegqbgveight7hggnxxgrq3\nsixfourfourseven1rfivekcflqd4\nmzvqrlp1sixnine\nsevennine3gqjmqrq\n6vhp8one251eight\n5dnsxqrb3twokdzdbdcncm\nsrcmzlkrone9ninegbfnfmxjf\n82lmhlhmtgfour6nbljxrgjb3ninesixtwoneqhc\n6pctdhrmhrgsbm\nsevenhgpfqvkh5three51jdkqz84\nhfzlmldpn9tjtlpb\nphccmtthonesix6\n3fourbrzqzsbnthone\n11pssjfqkfivebmprltbvm4\ngmtc2five\none2lj4fivetwo\nninexjrzfonehvntsmnzx2\nfourg746jpxvrbzdmseven\nsix76436\n89gddfltmdkkmleightqbzppmklxzgpnlg\nsevenmtfmdrbcl9\n3cpgvjgzxsixnine5hvrxbdnclfgbvfsix5twonelv\neightklzkzxltzone5\n377bqrbsdk1eightthree6\n2sevenlfqhmfour\n21oneonevg9rr\nonenzjgjxlmtrgbt84onenlls\n7rlgkgrsixfive\nnmmpl6fc7ccg8lkvpvqplztwo\nmzbxkmfcd89six\nfbhzskjt4seven3jrvfjhqsbcone3\nfive3sevensix\neightsix6\nn9\nthreeninemzpjqpcpvnine424ninesix\n8ninesfour7\ntwopbsbvdpnine6fourfive7qbbckmhxgg2\n5ksvzfbdbgvnqonehsgtvgkbgjkzggsmpvkxpxtft\nqeightwo2three68nine39lr\n5gpz6283five\n19fourjctnldrqlghx\ngtwonetbqxnvxlz2three\njdvmph5fgztldhtwoxhzk\nfourgmhflfpxmbqpt8jdxkntnchmtkgqhsgthree\n527five\n5sixfour\nmdchltjjqmfive7\nkn6glgjlspeightfivej\n3vsblvhkmt7\n17rmnoneqqgqmcvlseventwotwofive\neightjbmnzngtxsix3two\nfourgdczfkvs3onekrcm\n2prvszkhlnine\nnine67mqtxbthtfxgtwof\nlrcrninevgshzsrmj9threethree6\nbslrhlvpthree49fmlzb\n3nzqmndm7hxzrlsxgmt\n48jtjrmzvtct\npzpthxqxs9pjkhxc6gk5\neightbdvrcsg2tgjkzzj\n2oneeightonemlgpgtdg\n8sevenrxksglxdfour3lhst\nfour88sevennine1\nfiveqszbfmdv8xfiveeight\nsqqbhtk3nine5mqzkzbzlxlhdtwo\n8eightone\n63njcjnbhptone75fqhg\nfourthreefivesix9pvfivehmbhmhtrplseven\n5fourbfnzxfivenine8four\nrzhqrxfhpf9seven69kcjhxv\nnlh3fourfourlbppcjdx37\nhntmdckqhonejmcfphrrthreesix3two6\neight7sevenonefourfour\nnkhfgtknbjsixzrpppnqsone15threesixfive\nnine5xlvfqmfourfive3\nsscctsdfourkppsrd6eight4\neight92\n1oneightfs\n2hmgrqgjznhh1xztfmthreev\njvpzlqbsrb3\npszdpm3\nkccl2\ndzxmqpgfive6338seven\n9nqfpv\nprphfourninesix5six\n57vbcbcvtbgtqmktjscjbzfkjgzzv7rspqlrdfsmbsvbmb\nqxqlzmeightfourhzvctqsxczg4qggztsnrzz\n79seven8rzgzhksz97tbrftfllmpone\ntwovdspsvmftgnfjdqgjpv92qdqzcgr2\n6ninesevenninecxzmvlczjf1eight\n186\nfourtwo324five5eightv\nsix95five1tnpsqkr4twocgnbrtr\nthreesix2ksh\ndpbbkpxvd457sixbncfnkbleight3\nbxrbglhfcz2five\n8three3fivethreeqjg54nine\nnineonepvhrzcdm9lbqqgrdmggzkqzvhnbczrhhvjz\n3rgljppmcftqmqkqbl\n9threeqjrjrgseven\n4qtfn\nfive7fourfourhbspnlmgsmxnxt5\nfffctbhcpklfndj23twotwo39\n62sevenxnxthreefive6two\n5772six9five\nseven599rpztwo\nonefiveonemsftxtqdcsix7jngtvr\n12fttpqzzlk\nzcndrqjsfourthreethree11seven\nnineone8\ntdlbrszns4pdlptfvcnxqhx\n5six2nine8hvktskx\n5xvcnbsix9vnclxm\n94ptv6mzgninesk96\n4lfvvczdgvh8rzgkmvnk\n74nsvkm5nztmctpmngppzkphltpx\n46two9four67nine\noneonefive5fchd3nksmgs\n6vnstxdtlninezgdvpmjjcxlqvc\n6five3\n7four76rklqgljhdzzhdcqrqzpxmfftbcfiveoneightjzg\n43eight43955four\ngsrrtkpqpseven1fourbfninereight\n6rvdtwotwo4eighteight5\nfoureight9\n468cgbctpkqninetsxskqbhmj\n7twonine4\n8jnssjzcgpzrvbqzmv5three3jmhfjcbtwo\n4qjrgrntbfzghfkzxvmj53pcrjrlls\ntwonnjv8\n97three9zgkhgmrcfour\n9eight23\nqtsgznprvthreethree6\n63tworhdlrfstgxfmjjknfourqfvfjjz\nsevenltdcgs8three\nbjctzmmbhrqlfzqgxbcdgdgprv9twogjmrdclzt\n63lslhrbmcznine6\n66gc8seventwo\nzdrpnjjtwo62ph6\nninerdxqgxtqrrgx3gz3three5lfc\nlflcrscclg35oneeightpmhhm1bkftvxqbmx1\n74rgb\nsix8ninelvxdqphkd6\n5zsbfjsixseven1\n4rflxzvnn\nmjbpr4qjjhvbgn\n26four6drctrdmz\n6mrzflsszvq\nfcjbdqdnh1stglpmc6nmvggcvnrghcpcnz\none2four48fourcgkvvnlzlb\nkc2461two\nfivethree54dbvxmf\n849psvj9six\nhnxg5rbhbqzzeight4\nzzsix45glphncrrq5two4nqrdsk\nseventhree5qpfour7nnbllpkgveight\nbsh78mzxzhhseven8\njllhfive7sevenninebcmninet\nnineseven4pdkfpdzqpbzgt\nsevenninetbthree5skjmeightfpjrq\nnxkv6\nfour59\nzrhcvb6qlctpeightbnphxmlk1cjzdbl\n8mtgqjthreenine32\n6slj8zqbpqmr5\nrqkvxmqtkn8oneckdxtqvxcthreehngfdqqsseven\nnine4nfqpgdpvx9fivethreefourfnhfjmfzqr\n3gdxbh2gbm6\n72qmrrqbsflqpspdp9ff8two\nxgbphtnjfrg5fourdfmsmqhfp597\nbkkpgrhj8hlbsqmjdjqxjtjkrgppjgszpmm\nfive71\n9rmmf1hqqsmdrrfour\n7ninelflmvj6seventhree\n172\ntfhqv1\njfbtwoneninenine6dgxnqjgsteighttwo\n4dnvfvx\n37sj6three48nfjtclz\n2two4fsbbmrtnlqljqdskqseven\n1pnpzdr3sevenfive\nfourrbktzvtslxjdz9\n47six\njgcrllvbsvnrnmqfppxjfournbmjgp36nineb3\ns6fgr4four4\ncmpvp8three7\nxjqmgdrvtlv5xmcpnkhvfhrbjzx\n117eight\n9snnxnrccnonepdbfhhqcnpsevendsffjsvknpvmkdxp\nrgsix6rqzsix8nine\nnine8two\n2clfqtxkztwo4twobjscfzptgn\n6s5dnfkpxts5five\nfive9cst\neight71dmbdqfgtpvj3\nvdf3fjfsczlvvnine3foureightfivennhqmcdbdb\ntwo59eight9\neightdkfmscfmzrk7ninespg9\nsixseven46seven\n493djtvlhsixnhnts1sss\nninepczttwothreemtz3three\nfivezlfjhqnknnhdfour8eightninetwo\n4ngvsvfivemgthtlcczfbjq1ngxvsbmt9\nsixcgkmnd2\n12\nnkgbpqfvvb9threesixqgqvjgzdxm1rc\nfive7seven\n2seven8151\n86eightfivethreebgbfvr4\n355\nhgldv8four2dzmtpdsmck4five\nninemb7gtqzrpbt31fourndtsjkhv\n3fivefourghlmgfhninesbtcsqone32\n7krkptwo4qmzhvpsixthree\n74ppbsmnpfthreefivefive\n9four5zdkprcnbtl6\nfour3seveneightbrmdbcxxrk\ntwothreerdvxmqsbtgtszmxr4eight9jzbxpfstc\n73prc73six6three1\n9fivesix5fivepsg\ntwo98two98\noneseventhreethree4qvjtzksdsz\ntnbsgjqdkl22\nrmlbp4seven45\n9dpzqbds2pffivefqrchvhpvjbtnl\n79hdzstwofoureight5bjs\nt2\n4pstpbdkxblnmv9nzfzsttfgfivefiverrtlmgj\nzkkhkggtthree3eightseven\nd11fourzfcnmzbxgbpf\n66six53klhrdnbtp85\nonenineonelsfhzbkjgsfivedhzlfcvh8\njdt4four\nbgfzvxthreeonebhlqjbprf1\nsevenfourktsxkbbgt5\nmmqffp1\nvqghrsgxpsssix2jxzvdjdconeznlgpxbqdlsncrsix\n5bnzrdptseven8nine\nzqdklqmjjc2rl8jxtmsixxftvspzlhfive\nvmn9\n7mhhcftwofour21sixvvhlmspeight\nblvhpfour354sevendrllsfivexmt\nsix5fivetxrvnvftfvgcddshzktwo83\n3mdcpcj\nzdtjmglv8rkgpfvninethreetfgmx6sksteight\n48five8mnstwoone7nv\ncbpvqbddlllczgfmninenine3zqvptoneightx\n1two2\njxfhzr35threesixlxghqbqtq\nnftv7sevenninetwo2seventwonnkbvqnjjx\neightgjeight6f4\n2fivessrktznhjvxmghnlhbmfseven2two\nonedhvdg82xdvgmhxzbqrpzlnfx4\n17nzhkkpchk9\ndzccfzphmz6sevensixeightmcvxsthree\nonettfmvfhgsix1two\neightone37\n2onepdnbrbxk4foursevenzrmzmvqzgstppr\nfive536seventhj96\nnlhqljfzmb4khqtjh\nj8l\n2kpmrhmhonefour\n2jblsixkbblgzbfprhbjnrtspcqs\n6twothree\ntwo19eight9\nfivexbrjpnhhlvdztthree9\njzlmvxjn9oneoneone\n2cnqphtdjgdnhbkseven2fiveninefive\nthreetwonine67tqpbdfhfbv\nsmgr56slfpdmfive6ninehmqrck\nfqqnjqpccjqt6six75lpfczmnine\nbq2mdxchhmbxfzzkqgsixrbcpklpqnxsvnbthree\neightthreefxxssg8cx\nlhlc6\nnine6onexmvlbtbxznmrztnv\n8fivedlxzgxxflbltteighttwochtxlfjx\nseveneightfour1three4gbcnnk\n8fivejtxbpvmpxoneninesixzdrjhtncbnkgpsxqs6\n1hxsxn84eight\nsevenseven71phgltmtxq4\n8fivepcqthree3dn\nf6bbrdqflknp\nfiverpjbb9rjbrfrlrnine\nzfqpjjktg5seveneightfiveltvvtxdfk\nflhnczsbx6\ntsqlvphjmfourrcqsjj7four9six2rnz\nfivedmznjqtwoqmone1\neightfllck3spsfrgz92gmcgkgg\ntcrrrztsevensixqthpdqgxv91vvhbsqgzkq\n22pztfnhh554qdvzjxnnzzrj\ntscrkt4\nfzmsgmzbz5\nrxzsnjhcnkthree8eight\n9fourdhjpp2648\n4chvdrvtgqgbzhcxztwosixsixhnqknqmntzlltqncdxddnjlk\nxbfk2cr\nhrmbslbdgnine8nineeightseven8one3\nkmkdhbonesix79rbshvkkvjnzzq4\n9jrz26\nseven163nine\n83sixgvhjttnhkq9frphcqrng\n8five3seven\nthree16xqdzlkqjjtf\n5fiveeightl8veight1pxfptklnhj\nnpllktfive45nhvqjcjgpxx\nhbfr9mm\nonerbfkf4threeone\n7eightone\neight2kmjlsix8one61\nrvrnrdrninenine3zq6jqsr\nlztlntnsevenpplkhkftq1\ntfrrjmcvtbmktnxtxkkrcctmc33four5gfqpcjreight\n33rgcjxfsfqsvxxbxcnrjfndrrfmrtk\n3627837xhhb8\nbmjhkkn4pgf\nqkrsvjclp23\n5fourzllbmcgkxsevengkrzkpvcmvgtxlrv6\nfivetczxxvjrrqfive1sevennvj6one3\n');
var $author$project$Year2023$Day01$parse1 = function (string) {
	return -1;
};
var $author$project$Year2023$Day01$parse2 = function (string) {
	return $author$project$Year2023$Day01$parse1(string);
};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Debug$toString = _Debug_toString;
var $elm$core$Debug$todo = _Debug_todo;
var $author$project$Advent$unsafeMaybe = F2(
	function (location, maybe) {
		if (maybe.$ === 'Just') {
			var x = maybe.a;
			return x;
		} else {
			return _Debug_todo(
				'Advent',
				{
					start: {line: 196, column: 13},
					end: {line: 196, column: 23}
				})(location);
		}
	});
var $author$project$Advent$runTest = F4(
	function (puzzleType, parse, compute, _v0) {
		var description = _v0.description;
		var input = _v0.input;
		var expectedParsedInput = _v0.expectedParsedInput;
		var expectedOutput = _v0.expectedOutput;
		var _v1 = A2($elm$core$Debug$log, 'Running test ' + puzzleType, description);
		var parsedInput = parse(input);
		var output = compute(parsedInput);
		return ((!_Utils_eq(expectedParsedInput, $elm$core$Maybe$Nothing)) && (!_Utils_eq(
			expectedParsedInput,
			$elm$core$Maybe$Just(parsedInput)))) ? _Debug_todo(
			'Advent',
			{
				start: {line: 132, column: 9},
				end: {line: 132, column: 19}
			})(
			'\nTest \"' + (description + ('\" for ' + (puzzleType + (' failed on `parse`:\n  input:    ' + ($elm$core$Debug$toString(input) + ('\n  expected: ' + ($elm$core$Debug$toString(
				A2($author$project$Advent$unsafeMaybe, 'test - expected parsed input', expectedParsedInput)) + ('\n  actual:   ' + ($elm$core$Debug$toString(parsedInput) + '\n')))))))))) : ((!_Utils_eq(output, expectedOutput)) ? _Debug_todo(
			'Advent',
			{
				start: {line: 146, column: 9},
				end: {line: 146, column: 19}
			})(
			'\nTest \"' + (description + ('\" for ' + (puzzleType + (' failed on `compute`:\n  input:    ' + ($elm$core$Debug$toString(parsedInput) + ('\n  expected: ' + ($elm$core$Debug$toString(expectedOutput) + ('\n  actual:   ' + ($elm$core$Debug$toString(output) + '\n')))))))))) : _Utils_Tuple0);
	});
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Advent$program = function (_v0) {
	var input = _v0.input;
	var parse1 = _v0.parse1;
	var parse2 = _v0.parse2;
	var compute1 = _v0.compute1;
	var compute2 = _v0.compute2;
	var tests1 = _v0.tests1;
	var tests2 = _v0.tests2;
	return $elm$core$Platform$worker(
		{
			init: function (_v1) {
				var testResults1 = A2(
					$elm$core$List$map,
					function (test) {
						var _v8 = A2($elm$core$Debug$log, '[START]', _Utils_Tuple0);
						return A2(
							$elm$core$Debug$log,
							'[END]',
							A4($author$project$Advent$runTest, '*', parse1, compute1, test));
					},
					$elm$core$List$reverse(tests1));
				var testResults2 = A2(
					$elm$core$List$map,
					function (test) {
						var _v7 = A2($elm$core$Debug$log, '[START]', _Utils_Tuple0);
						return A2(
							$elm$core$Debug$log,
							'[END]',
							A4($author$project$Advent$runTest, '**', parse2, compute2, test));
					},
					$elm$core$List$reverse(tests2));
				var announce = F2(
					function (_v5, _v6) {
						return A2($elm$core$Debug$log, 'Tests passed!', _Utils_Tuple0);
					});
				var _v2 = A2(announce, testResults1, testResults2);
				var _v3 = A2($elm$core$Debug$log, 'Running part 1 on real input', _Utils_Tuple0);
				var output1 = A2(
					$elm$core$Debug$log,
					'Output 1',
					A2(
						$elm$core$Debug$log,
						'[END]',
						compute1(
							parse1(
								A2($elm$core$Debug$log, '[START]', input)))));
				var _v4 = A2($elm$core$Debug$log, 'Running part 2 on real input', _Utils_Tuple0);
				var output2 = A2(
					$elm$core$Debug$log,
					'Output 2',
					A2(
						$elm$core$Debug$log,
						'[END]',
						compute2(
							parse2(
								A2($elm$core$Debug$log, '[START]', input)))));
				return _Utils_Tuple2(
					_Utils_Tuple2(output1, output2),
					$elm$core$Platform$Cmd$none);
			},
			subscriptions: function (_v9) {
				return $elm$core$Platform$Sub$none;
			},
			update: F2(
				function (_v10, model) {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				})
		});
};
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $author$project$Year2023$Day01$tests1 = _List_Nil;
var $author$project$Year2023$Day01$tests2 = _List_Nil;
var $author$project$Year2023$Day01$main = $author$project$Advent$program(
	{compute1: $author$project$Year2023$Day01$compute1, compute2: $author$project$Year2023$Day01$compute2, input: $author$project$Year2023$Day01$input_, parse1: $author$project$Year2023$Day01$parse1, parse2: $author$project$Year2023$Day01$parse2, tests1: $author$project$Year2023$Day01$tests1, tests2: $author$project$Year2023$Day01$tests2});
_Platform_export({'Year2023':{'Day01':{'init':$author$project$Year2023$Day01$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}}});}(this));let oldLog=console.log;console.log=function(...args){let x=args[0];if(x.startsWith('[START]')){console.time('time');}else if(x.startsWith('[LOG]')){console.timeLog('time');}else if(x.startsWith('[END]')){console.timeEnd('time');}else{oldLog(...args);}}
this.Elm.Year2023.Day01.init();
