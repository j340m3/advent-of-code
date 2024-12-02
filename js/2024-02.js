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
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$List$cons = _List_cons;
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
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
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
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $author$project$Year2024$Day02$validateAscending = function (input) {
	validateAscending:
	while (true) {
		if (!input.b) {
			return $elm$core$Maybe$Just(1);
		} else {
			if (!input.b.b) {
				var x = input.a;
				return $elm$core$Maybe$Just(1);
			} else {
				var x = input.a;
				var _v1 = input.b;
				var y = _v1.a;
				var xs = _v1.b;
				if (_Utils_cmp(x, y) > -1) {
					return $elm$core$Maybe$Nothing;
				} else {
					if ((1 <= (y - x)) && ((y - x) <= 3)) {
						var $temp$input = A2($elm$core$List$cons, y, xs);
						input = $temp$input;
						continue validateAscending;
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}
			}
		}
	}
};
var $author$project$Year2024$Day02$validateDescending = function (input) {
	validateDescending:
	while (true) {
		if (!input.b) {
			return $elm$core$Maybe$Just(1);
		} else {
			if (!input.b.b) {
				var x = input.a;
				return $elm$core$Maybe$Just(1);
			} else {
				var x = input.a;
				var _v1 = input.b;
				var y = _v1.a;
				var xs = _v1.b;
				if (_Utils_cmp(x, y) < 1) {
					return $elm$core$Maybe$Nothing;
				} else {
					if ((1 <= (x - y)) && ((x - y) <= 3)) {
						var $temp$input = A2($elm$core$List$cons, y, xs);
						input = $temp$input;
						continue validateDescending;
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}
			}
		}
	}
};
var $author$project$Year2024$Day02$validate = function (input) {
	if (!input.b) {
		return $elm$core$Maybe$Just(1);
	} else {
		if (!input.b.b) {
			var x = input.a;
			return $elm$core$Maybe$Just(1);
		} else {
			var x = input.a;
			var _v1 = input.b;
			var y = _v1.a;
			var xs = _v1.b;
			return _Utils_eq(x, y) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(x, y) < 0) ? $author$project$Year2024$Day02$validateAscending(input) : $author$project$Year2024$Day02$validateDescending(input));
		}
	}
};
var $author$project$Year2024$Day02$compute1 = function (input) {
	return $elm$core$List$sum(
		A2($elm$core$List$filterMap, $author$project$Year2024$Day02$validate, input));
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
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
var $elm_community$list_extra$List$Extra$subsequencesNonEmpty = function (list) {
	if (!list.b) {
		return _List_Nil;
	} else {
		var first = list.a;
		var rest = list.b;
		var f = F2(
			function (ys, r) {
				return A2(
					$elm$core$List$cons,
					ys,
					A2(
						$elm$core$List$cons,
						A2($elm$core$List$cons, first, ys),
						r));
			});
		return A2(
			$elm$core$List$cons,
			_List_fromArray(
				[first]),
			A3(
				$elm$core$List$foldr,
				f,
				_List_Nil,
				$elm_community$list_extra$List$Extra$subsequencesNonEmpty(rest)));
	}
};
var $elm_community$list_extra$List$Extra$subsequences = function (xs) {
	return A2(
		$elm$core$List$cons,
		_List_Nil,
		$elm_community$list_extra$List$Extra$subsequencesNonEmpty(xs));
};
var $author$project$Year2024$Day02$validate2 = function (input) {
	var _v0 = $author$project$Year2024$Day02$validate(input);
	if (_v0.$ === 'Just') {
		var a = _v0.a;
		return $elm$core$Maybe$Just(a);
	} else {
		return $elm$core$List$head(
			A2(
				$elm$core$List$filterMap,
				$author$project$Year2024$Day02$validate,
				A2(
					$elm$core$List$filter,
					function (l) {
						return _Utils_eq(
							$elm$core$List$length(l),
							$elm$core$List$length(input) - 1);
					},
					$elm_community$list_extra$List$Extra$subsequences(input))));
	}
};
var $author$project$Year2024$Day02$compute2 = function (input) {
	return $elm$core$List$sum(
		A2($elm$core$List$filterMap, $author$project$Year2024$Day02$validate2, input));
};
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
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
var $author$project$Year2024$Day02$input_ = $author$project$Advent$removeNewlinesAtEnds('\n6 8 11 12 14 16 18 16\n73 76 79 80 81 84 86 86\n32 33 34 37 40 44\n9 11 13 14 17 24\n59 61 64 62 65\n33 36 37 39 36 35\n60 62 64 61 62 64 64\n12 15 16 15 17 18 22\n72 73 75 77 79 82 79 85\n60 61 64 64 67 69\n44 45 45 46 48 50 52 51\n9 11 11 13 14 14\n3 5 8 11 11 15\n48 51 52 52 53 54 59\n76 77 80 84 86 87\n30 32 33 35 38 42 41\n91 92 93 97 97\n59 61 63 67 69 73\n59 60 64 67 68 73\n28 30 31 36 39 42\n26 29 32 34 40 39\n64 65 67 74 75 78 79 79\n49 52 59 61 65\n34 35 42 43 44 51\n12 10 11 14 17 18 20 21\n68 67 70 73 71\n80 79 80 81 84 86 88 88\n60 58 60 61 62 66\n14 12 13 14 17 18 21 28\n24 21 24 26 25 26\n30 29 32 35 37 34 33\n45 42 41 44 44\n55 52 49 52 55 58 59 63\n10 9 11 14 16 14 17 24\n44 42 43 44 45 45 48 51\n53 52 52 55 53\n42 39 42 43 45 45 48 48\n86 83 83 86 90\n7 4 7 8 8 11 18\n58 55 56 59 63 66 68 70\n77 75 79 81 78\n93 90 93 97 97\n13 12 16 18 22\n42 40 42 45 46 47 51 58\n18 15 16 22 24 25\n22 20 26 27 30 33 35 33\n40 39 44 45 45\n36 34 39 42 45 46 50\n39 37 44 46 49 54\n31 31 32 33 36 39 40 42\n6 6 7 10 11 14 16 14\n20 20 22 23 26 28 30 30\n50 50 52 55 57 61\n11 11 14 15 20\n89 89 91 89 90\n38 38 41 43 44 47 44 41\n35 35 36 33 33\n76 76 79 82 85 82 85 89\n31 31 32 30 33 40\n38 38 40 40 41\n85 85 85 87 86\n44 44 45 48 51 51 52 52\n57 57 58 58 59 60 61 65\n22 22 24 24 27 32\n59 59 62 66 68\n17 17 20 24 27 30 28\n49 49 50 51 53 57 59 59\n48 48 49 53 57\n46 46 47 48 51 55 61\n51 51 57 59 61 64 67 70\n42 42 44 50 52 49\n75 75 80 81 81\n8 8 13 15 17 21\n22 22 23 24 27 34 37 44\n75 79 80 82 85 88\n67 71 73 75 77 76\n8 12 14 15 15\n17 21 24 25 27 31\n47 51 54 55 58 65\n66 70 72 71 72\n30 34 37 35 38 36\n60 64 65 64 65 67 67\n72 76 77 76 79 83\n20 24 25 28 29 31 29 36\n36 40 43 44 47 49 49 52\n15 19 21 24 24 22\n77 81 83 84 84 86 89 89\n46 50 52 52 56\n17 21 22 22 27\n75 79 81 85 87 90\n7 11 13 17 15\n27 31 33 37 37\n34 38 41 45 49\n69 73 74 78 85\n14 18 25 27 28 30 31 33\n24 28 29 34 37 36\n56 60 67 70 70\n35 39 42 48 51 52 56\n74 78 80 85 92\n47 54 55 58 60 63 65 67\n83 89 92 95 94\n32 38 41 43 43\n38 45 48 50 54\n54 61 62 65 67 69 76\n76 83 84 85 82 84\n69 75 78 81 78 75\n7 13 16 18 15 15\n46 52 55 57 56 60\n74 80 83 84 81 82 89\n43 49 49 51 53\n82 87 87 90 91 88\n42 49 49 51 51\n24 30 33 36 37 37 41\n37 42 43 43 45 46 51\n67 73 77 80 83 86\n29 34 37 41 42 44 46 45\n55 62 66 68 69 70 73 73\n20 26 28 32 36\n33 40 42 46 47 54\n58 65 68 69 76 78\n60 65 66 72 70\n46 52 59 62 63 65 65\n61 67 68 70 75 78 82\n52 58 60 67 73\n81 78 76 74 73 71 73\n78 75 72 71 70 67 67\n17 16 15 12 11 9 5\n53 50 48 45 44 41 38 31\n99 96 98 97 96 94\n39 37 35 33 32 31 34 36\n27 25 22 24 24\n48 47 45 42 43 42 38\n95 93 90 93 87\n92 89 88 85 85 82 80 78\n64 62 61 60 60 58 55 57\n79 77 75 74 71 71 71\n91 89 88 88 87 83\n36 34 34 32 27\n47 45 42 38 36\n68 67 63 62 59 57 56 57\n61 60 56 54 52 50 47 47\n40 39 35 33 29\n75 72 71 67 65 63 58\n93 90 84 82 79 76 74 71\n78 77 75 72 71 69 62 64\n44 41 36 33 30 28 28\n35 32 29 24 23 22 18\n60 57 52 51 45\n24 25 24 22 21 18 15 13\n43 45 42 39 36 33 34\n71 73 72 69 67 64 63 63\n19 22 20 19 16 12\n43 45 43 40 38 31\n38 39 38 36 37 36 34 33\n53 54 56 55 58\n76 78 75 78 76 73 73\n70 71 70 72 70 69 66 62\n73 74 72 70 68 69 64\n97 98 96 95 93 90 90 87\n42 44 41 40 39 39 37 40\n52 54 51 50 47 46 46 46\n85 88 86 86 83 82 79 75\n85 88 86 84 81 79 79 72\n75 78 76 72 71 68 66\n29 31 30 27 25 21 19 22\n47 48 47 44 40 40\n58 61 57 55 51\n68 70 68 64 61 56\n81 82 77 75 73 70\n53 56 53 50 43 41 38 39\n20 23 21 18 15 9 8 8\n66 69 66 60 56\n48 50 47 44 38 36 34 29\n67 67 66 64 63 60\n83 83 82 81 84\n63 63 61 59 59\n64 64 62 61 57\n75 75 74 73 72 70 69 62\n76 76 75 74 72 70 71 68\n70 70 68 69 67 65 62 64\n6 6 5 4 5 2 2\n16 16 19 16 14 13 9\n34 34 33 31 28 25 27 21\n28 28 28 26 23 21 20\n20 20 20 18 17 14 12 15\n63 63 60 60 60\n28 28 28 26 22\n36 36 36 35 33 28\n82 82 78 77 74 71\n62 62 59 57 55 51 52\n41 41 39 35 35\n34 34 30 27 24 20\n97 97 95 91 86\n79 79 72 69 68 65 64\n52 52 49 47 44 38 40\n56 56 50 49 48 45 45\n97 97 94 87 86 85 82 78\n97 97 95 89 86 83 82 76\n24 20 17 16 15 13 11\n52 48 47 46 48\n21 17 15 12 10 10\n27 23 20 18 17 13\n57 53 52 51 50 48 46 40\n87 83 82 83 80\n99 95 97 96 97\n97 93 91 88 90 90\n90 86 83 85 81\n49 45 42 44 41 38 31\n15 11 10 10 8\n96 92 92 90 89 87 86 88\n18 14 14 13 12 11 11\n21 17 15 14 13 12 12 8\n86 82 80 78 78 77 72\n74 70 67 64 60 57 54 53\n46 42 39 38 34 33 36\n52 48 46 44 40 40\n40 36 33 32 29 25 24 20\n92 88 84 82 77\n28 24 22 15 12 11\n71 67 66 65 58 55 58\n89 85 84 81 78 72 71 71\n42 38 32 31 28 26 24 20\n87 83 81 74 68\n69 62 59 58 55 52\n95 90 88 86 84 81 78 81\n45 39 38 36 34 33 33\n84 78 75 74 71 67\n61 55 54 52 51 48 46 40\n58 51 49 47 44 42 45 42\n37 32 29 30 28 29\n64 58 59 56 56\n76 70 68 67 65 66 62\n55 49 46 48 47 44 43 38\n88 82 81 81 78\n98 91 90 87 84 84 83 85\n95 88 85 85 85\n79 73 70 67 67 63\n50 43 41 38 38 36 29\n17 12 11 7 4\n31 25 21 18 15 13 16\n98 92 91 88 86 82 82\n61 54 51 47 43\n96 89 88 84 78\n44 38 36 34 29 26\n98 93 92 85 83 82 85\n73 67 66 65 59 58 58\n30 25 23 21 14 12 8\n68 62 59 53 48\n3 6 8 10 13 16 19 16\n48 51 53 54 57 60 60\n34 36 39 40 41 45\n2 3 5 7 8 11 16\n28 29 30 29 30 33\n43 44 47 50 49 47\n77 80 82 83 86 83 85 85\n50 52 54 56 58 57 59 63\n32 33 35 33 38\n67 68 69 69 70\n77 80 80 83 82\n69 71 74 76 76 78 79 79\n15 16 17 17 19 22 24 28\n50 52 53 56 58 58 64\n80 81 85 87 88 90 93\n42 44 45 48 52 50\n9 10 13 15 19 22 22\n34 36 40 41 44 47 50 54\n74 75 78 80 83 87 89 96\n78 81 87 89 91\n2 4 11 12 14 15 18 17\n57 58 59 60 62 63 70 70\n49 51 54 57 64 65 67 71\n8 9 15 16 21\n50 48 49 50 53 56\n97 94 97 98 95\n5 2 3 6 9 9\n12 9 11 13 14 18\n84 82 83 86 88 89 90 95\n83 80 81 84 87 86 88\n24 21 22 25 24 25 22\n99 97 96 97 97\n13 12 15 14 15 17 21\n87 85 88 86 93\n9 8 11 12 15 17 17 19\n31 28 30 32 32 29\n49 48 51 51 51\n62 60 60 63 66 70\n78 75 76 79 80 81 81 88\n39 36 38 41 43 45 49 51\n94 92 96 98 99 97\n75 74 78 81 84 84\n16 14 16 19 23 24 27 31\n51 48 49 53 55 60\n38 36 39 41 42 45 51 53\n68 65 66 73 74 72\n34 31 38 39 41 41\n25 24 29 31 33 36 40\n12 9 15 16 23\n21 21 22 23 25\n83 83 84 87 86\n76 76 78 80 83 85 86 86\n66 66 68 71 74 78\n86 86 88 91 97\n65 65 66 63 66 67 68 70\n76 76 74 77 80 79\n47 47 48 45 48 48\n37 37 38 41 40 44\n62 62 60 61 67\n57 57 57 60 61 64 66 68\n34 34 36 38 38 35\n31 31 32 34 37 37 38 38\n22 22 22 24 28\n71 71 71 73 74 80\n52 52 53 57 58 60 63\n42 42 45 46 50 48\n47 47 48 49 50 51 55 55\n46 46 49 51 55 57 60 64\n45 45 46 50 56\n60 60 66 68 70 73\n84 84 85 91 93 95 94\n11 11 12 17 18 18\n25 25 26 33 37\n29 29 36 38 45\n41 45 46 49 52\n13 17 19 21 23 26 28 26\n16 20 22 24 24\n82 86 88 89 90 94\n28 32 33 36 37 39 44\n33 37 38 37 39\n24 28 27 29 26\n11 15 18 19 17 19 21 21\n65 69 70 73 72 74 78\n64 68 66 67 70 73 80\n63 67 70 70 71 73 76\n74 78 80 80 82 79\n46 50 52 52 55 56 56\n14 18 21 21 22 26\n15 19 20 23 23 28\n45 49 50 52 56 59 62 65\n12 16 19 23 21\n38 42 43 47 50 50\n60 64 67 70 74 75 79\n49 53 56 57 59 62 66 73\n54 58 64 65 68 69 70\n47 51 57 59 58\n17 21 28 29 31 34 34\n9 13 19 22 25 27 30 34\n22 26 27 29 31 36 37 43\n71 76 78 80 83 84 86 87\n43 49 52 54 55 56 53\n27 32 33 36 38 41 43 43\n7 13 16 17 21\n41 47 50 51 57\n45 51 52 53 54 55 53 56\n78 83 85 87 86 89 86\n15 22 23 25 24 24\n56 62 65 63 64 68\n3 10 12 14 11 18\n52 58 58 59 60 63 65\n80 85 88 89 89 91 92 91\n35 41 41 43 46 46\n2 8 10 13 13 16 17 21\n52 59 59 61 64 66 67 72\n42 47 50 51 52 56 59 62\n3 10 13 15 16 20 18\n59 66 70 72 75 78 78\n27 33 35 38 40 44 48\n35 40 43 47 53\n49 54 57 63 65 68 71\n40 47 50 56 57 60 57\n9 16 17 20 23 29 29\n9 14 17 18 24 25 26 30\n49 56 58 59 61 68 70 75\n31 28 25 23 20 18 20\n44 42 39 36 33 31 29 29\n16 15 14 12 9 7 3\n35 34 32 30 28 27 22\n98 96 94 97 94 93\n82 80 79 82 80 79 82\n80 78 81 80 80\n39 36 37 36 32\n24 22 20 19 18 19 16 10\n71 69 66 63 61 61 58 56\n72 71 68 67 66 66 68\n99 97 94 91 90 90 88 88\n90 87 84 83 83 80 79 75\n73 70 67 66 64 61 61 56\n20 18 17 15 12 8 6\n66 63 60 59 55 58\n30 27 24 21 17 17\n90 88 87 86 82 80 76\n76 74 72 68 67 64 57\n90 89 88 83 82\n64 61 59 56 54 47 48\n23 20 19 17 16 10 7 7\n44 42 36 35 31\n52 51 50 44 37\n56 58 57 55 54 52\n5 8 7 6 5 7\n26 28 27 25 23 21 19 19\n30 32 29 26 24 22 21 17\n29 30 29 26 23 22 17\n80 81 80 81 80 78 76 75\n85 87 85 83 85 86\n70 72 70 68 69 68 68\n45 48 51 48 44\n43 46 44 45 44 41 39 34\n40 42 39 36 34 34 33 32\n73 75 75 74 71 70 71\n29 31 29 28 28 28\n18 19 16 16 12\n11 14 13 11 11 8 1\n91 92 88 86 85 82 81\n59 62 58 56 57\n8 10 9 5 5\n96 99 97 95 93 91 87 83\n22 23 19 18 16 15 8\n65 66 64 59 58 56 54 52\n18 21 18 15 9 8 5 8\n53 54 49 48 47 46 46\n53 54 47 45 41\n73 75 74 73 72 66 65 60\n16 16 14 11 8 5\n43 43 40 38 37 36 38\n19 19 17 14 14\n85 85 82 81 79 75\n83 83 81 78 75 72 66\n45 45 43 46 43 40\n9 9 6 7 10\n93 93 92 91 90 93 93\n16 16 17 14 13 12 10 6\n12 12 9 8 7 9 7 2\n88 88 87 87 85 83 80 77\n9 9 6 5 4 2 2 3\n99 99 99 97 95 95\n56 56 54 52 49 49 48 44\n56 56 56 53 46\n52 52 49 45 43 40 39\n99 99 97 95 91 90 87 89\n46 46 45 43 42 40 36 36\n87 87 84 80 76\n72 72 69 65 59\n44 44 42 37 34 31 30\n90 90 87 85 79 82\n56 56 55 49 46 43 42 42\n16 16 13 7 3\n52 52 51 49 46 43 36 30\n73 69 67 65 63 62 61 60\n36 32 30 28 31\n68 64 62 61 58 55 54 54\n14 10 8 7 5 1\n58 54 51 48 45 43 42 35\n34 30 27 30 29 26 24\n81 77 76 73 74 77\n32 28 25 23 24 24\n47 43 42 40 39 40 36\n18 14 15 14 9\n44 40 38 38 37\n84 80 77 77 79\n84 80 79 79 77 77\n18 14 14 13 10 6\n86 82 80 80 73\n80 76 72 70 67 66\n35 31 30 27 23 20 23\n79 75 72 68 66 66\n57 53 52 49 48 47 43 39\n65 61 59 56 52 47\n66 62 55 52 51 48 45\n35 31 30 28 21 20 18 21\n88 84 82 76 74 74\n88 84 82 79 72 70 69 65\n85 81 75 72 65\n18 13 10 9 7 6\n52 45 44 41 40 38 41\n76 71 69 67 65 65\n40 33 31 28 24\n99 92 89 86 83 81 74\n77 71 68 69 68 67\n72 65 62 65 63 61 62\n52 45 48 46 43 43\n97 91 92 91 87\n32 25 24 21 22 17\n89 84 81 79 76 74 74 73\n91 84 84 82 83\n90 84 84 82 82\n71 66 64 64 61 57\n35 28 25 23 21 21 20 15\n95 90 88 84 83\n34 27 24 22 19 15 17\n61 54 53 51 47 46 43 43\n36 29 27 25 22 21 17 13\n53 46 43 39 33\n33 27 25 18 16 13 10 8\n43 38 31 29 28 30\n81 74 68 66 63 63\n82 75 70 67 64 60\n34 27 26 21 14\n71 73 76 79 80 83 87\n39 43 43 46 48 47\n45 46 45 48 46 44 42 42\n78 73 72 70 66 64 63 64\n15 15 14 13 15 13 9\n86 86 90 92 93 94 97 97\n83 76 75 71 66\n77 81 82 85 87 84\n44 45 42 39 36 35 35\n34 31 29 26 23 24\n10 7 9 11 9 10 14\n21 16 9 8 6 9\n28 28 29 31 32 36\n81 77 76 71 70 69 68 61\n33 37 41 42 39\n68 62 59 55 52\n63 67 69 71 77 80 80\n54 54 51 48 47 45 42\n23 26 23 17 16 14 16\n87 90 89 87 87 80\n67 60 59 57 53\n80 81 78 74 71\n16 16 18 21 22 24 24\n1 1 4 10 14\n59 59 62 63 69 76\n63 67 69 70 72 78 82\n34 28 25 22 23 22 15\n31 25 24 24 23 21 24\n55 56 54 51 48 42 40\n82 80 84 86 93\n71 71 69 67 66 62\n81 85 88 91 93 96 93 96\n37 33 32 29 29 23\n79 86 88 91 98\n61 67 67 70 72 73 78\n55 51 48 43 45\n65 66 65 62 64 62 55\n57 53 51 50 53 55\n75 69 66 69 68 66 62\n45 47 48 48 49 51 53 53\n52 52 55 60 60\n69 65 62 62 61 58 55 51\n30 36 39 42 44 44 46\n16 16 14 13 11 12\n20 24 28 31 31\n92 88 82 81 79 75\n32 38 40 43 45 46 46\n55 54 53 56 55 51\n44 44 47 47 49\n83 83 79 78 77 73\n83 78 76 74 73 66 66\n61 62 63 64 69 76\n85 90 93 97 98\n19 22 20 19 18\n72 71 73 75 75 78 83\n25 28 26 25 24 19\n35 38 34 32 28\n74 77 79 82 81 82\n55 54 59 61 63\n72 73 70 67 65 64 67\n66 62 59 56 55 53 47\n71 71 74 74 76 77 82\n8 10 11 14 15 17 20 22\n41 43 44 47 49 51 53 56\n48 50 51 54 56\n77 74 71 69 68\n5 6 8 11 12 13\n41 40 37 36 34 31 28\n22 19 18 16 14\n60 58 57 56 54 52 51 50\n29 31 32 34 35 36 37\n15 18 21 22 25\n84 82 80 79 76 73 70\n40 37 34 31 29 27 26 24\n27 29 31 32 34 37 40 41\n98 97 95 92 89 86 85\n14 17 20 21 23 24\n15 16 19 20 21 23 25 28\n8 10 13 16 17 19 21 24\n58 59 62 63 66 69 72\n15 14 13 10 9\n36 37 40 42 44 46 49 52\n40 38 37 34 32 31 29 27\n1 2 4 5 8\n16 19 21 22 23 25 28\n6 9 11 14 15 17 19 21\n71 73 74 75 76 79 82\n74 72 70 67 64\n14 12 10 8 7 6\n85 86 88 90 92 94 95\n23 21 20 18 17 15 12 11\n30 33 35 37 39 42\n54 57 59 62 65 66\n83 85 87 89 92 94 96 98\n23 24 26 28 30 33\n87 88 91 94 96 99\n85 83 81 79 78 75\n99 97 96 95 93 90 89 88\n4 5 7 10 11 12 13 14\n67 69 71 74 77\n29 26 24 22 20 19 16\n15 14 13 11 9 7\n49 48 45 42 40 38 36 33\n98 96 93 90 87 85 84 83\n2 3 6 8 11 12 15 17\n73 72 70 68 67 66 65\n14 11 8 6 4 2\n18 19 20 23 24 25 26 28\n75 72 71 69 66 64 62\n17 18 21 22 25\n69 71 74 76 78\n51 49 48 45 43 41 39 37\n66 63 60 58 55 54 51\n91 93 95 97 98\n35 32 31 28 25\n43 41 40 37 34 32 30 28\n72 69 67 64 61 60\n80 82 83 86 87 90\n34 37 39 42 45 47 48\n38 40 43 45 48 49\n37 39 42 45 46 48 50 51\n91 93 96 97 99\n9 6 5 3 1\n63 64 66 68 71 74 77\n41 43 44 45 46 48\n3 5 7 8 10 13 14 17\n97 95 94 92 90 89 86 83\n10 9 7 4 1\n28 30 31 34 35 37 40 43\n42 44 45 48 50 51 52 53\n70 71 72 73 76 79\n28 29 31 32 34\n22 21 18 17 16 13 10 8\n84 81 78 75 73 71\n30 33 34 35 36 38\n57 58 61 64 67 68 71\n63 65 67 68 71\n41 39 38 35 32 29 28 27\n7 9 11 13 14\n27 25 23 22 21 20\n89 88 86 83 80\n32 30 27 26 25\n29 27 26 23 20 17 14 13\n92 91 89 88 87 85\n34 31 30 27 24 23 20\n73 70 68 65 62\n79 82 83 84 87 90 92 95\n11 14 17 20 21 24 27 29\n23 20 18 17 16 14 13\n7 9 10 12 15\n11 12 14 17 19 21 22\n27 26 24 21 20 18\n65 67 70 72 73 76\n22 23 25 26 29 31 33\n66 69 71 74 75 78\n44 47 50 53 54 56 59\n16 14 11 10 8 6 4 2\n49 50 51 53 55 58\n67 65 63 61 60 59 58\n98 95 94 91 89\n56 58 59 61 64 65 68 71\n74 72 71 70 67 65 64\n5 8 9 11 12\n51 49 48 46 45 43 40\n36 33 30 28 25 22 20\n59 61 62 63 65 68 69 70\n33 32 29 26 23 22 20\n27 28 31 33 34 36 39\n22 19 18 15 14 12\n40 42 43 45 46 48\n25 27 28 30 33\n6 8 9 12 15 17 18\n65 63 60 59 58\n99 98 97 94 92 90 89 87\n9 10 13 14 15 18\n11 14 17 20 21 23 25 28\n90 87 86 84 83 81 78\n47 44 43 42 40 37 35 33\n32 33 34 36 38 40 42 45\n61 62 65 68 70 72\n62 64 67 68 70 73 76\n51 49 48 47 44 41\n37 35 34 33 31\n32 35 38 39 41 42\n85 88 89 91 93\n29 32 34 36 38 41\n33 31 29 27 24 23 22\n21 22 23 24 25 26 27 30\n41 44 47 48 50 53 54\n47 46 43 42 41 39 36 33\n12 13 16 17 20 23 24\n11 13 16 19 20 23 25\n82 81 79 77 74\n33 35 36 37 40 42\n64 66 68 71 73 74\n61 58 55 53 51 50 48\n97 95 94 91 89 88\n75 76 79 80 81 83\n54 56 59 60 61 62\n94 91 90 89 88\n76 74 72 70 68 67 64\n24 27 28 31 34 35 37\n19 16 15 14 13 12 9 8\n54 56 57 58 61 63\n43 44 47 49 51\n52 49 47 46 43 41 38\n4 6 9 11 14\n41 43 44 47 48 51 54 57\n4 7 9 10 13 16 19\n60 61 63 66 69 70\n82 79 76 74 71\n61 63 65 68 69 71 74\n37 34 33 30 27\n23 26 28 29 31 32 34 36\n90 92 94 97 98\n54 57 59 60 62 65\n16 19 21 22 24 27 28 31\n64 63 62 60 57 54\n8 9 11 14 15 16 17\n32 30 28 26 24 23 20\n22 20 19 16 14\n53 51 48 45 43 42 39 36\n32 35 38 41 42 44 46\n40 41 42 45 46 49 52\n24 27 30 32 33 35 37 38\n15 16 17 19 22\n53 50 47 45 42 39 37 35\n55 58 61 64 67 70 72\n11 12 15 18 20 22 25 26\n42 40 39 36 35 33\n63 66 69 70 73\n83 84 87 89 91 92 94 95\n11 14 16 17 20 22 25 27\n40 42 45 48 49 52\n39 36 33 30 28 26\n75 74 73 70 67 65 63 61\n23 26 28 30 33 36 39 40\n36 38 40 41 44 46 48 50\n20 18 15 13 12 10 9\n78 75 73 70 68 67\n52 51 49 48 47 45 42 39\n93 91 89 88 85 82\n37 38 41 42 44 47\n13 12 9 8 6 3\n92 91 89 86 85 83 80\n49 46 43 42 40 39 37\n62 60 59 56 54 53 50\n59 58 57 54 53 51 49 48\n88 91 92 93 94 96 97\n29 30 32 34 37 40 41 43\n38 37 35 33 31\n82 79 78 75 72 71 68\n32 31 30 28 25 24 22 20\n91 88 85 83 81 78 77\n64 67 69 70 72 73 75 78\n3 4 5 7 10 13\n96 94 92 91 88\n57 54 52 49 46\n54 52 51 49 46 44 42 40\n68 66 65 63 61 58 55 52\n61 58 55 52 51\n55 58 60 62 65 67 69 71\n9 11 13 15 18 20 21 24\n31 28 26 25 23 20 19 16\n37 38 39 42 45 48\n34 35 38 40 43 46\n35 38 41 42 44 46 47\n81 80 78 75 72 70 68 65\n33 36 37 38 40 42 44\n59 57 54 53 50 49 48 45\n96 95 93 90 88\n82 85 87 89 90\n56 58 61 63 64 65 66 67\n42 39 37 34 32\n8 11 12 15 17 19 20\n36 38 40 42 45\n59 57 56 53 52\n20 21 24 26 28 30 32 33\n81 78 76 73 71 70\n57 60 63 65 66 67 69\n82 81 79 77 76\n63 64 67 68 70 73 75\n84 87 88 90 92 94\n42 40 39 36 35 32\n51 49 48 45 44\n21 23 24 27 28 29\n95 92 89 88 85\n51 48 46 43 41 38 35\n20 23 24 26 27 29 30\n25 27 29 32 33 35 36\n29 27 26 24 22 21 18 15\n24 25 26 27 30 32\n25 26 28 31 34\n33 35 37 38 40 41 44\n15 18 21 24 26 27\n50 47 46 43 40 37\n1 2 4 6 7 9 10\n24 21 19 16 14 11\n95 93 90 89 88 85 82\n24 21 18 15 14 12 9\n47 48 50 52 53 54 56 58\n99 97 96 95 93 90 87 84\n32 33 36 39 41 43 45 46\n72 70 68 67 64 61\n87 86 85 83 82 81 78 76\n57 59 61 64 65 67\n16 17 20 21 23 25 27 28\n12 15 18 21 23\n93 92 91 90 88 85 82 81\n39 38 35 32 30 28 27 25\n50 53 56 59 62\n66 65 64 62 61 59\n23 24 27 30 32 35 37 40\n7 9 12 15 17 19 21 22\n77 74 72 71 68\n56 53 50 48 46\n83 81 80 79 78 75 73 70\n49 51 54 57 58 59\n99 97 94 92 91 89 86\n23 25 28 31 33 34 37\n56 54 53 51 50 48 46\n93 92 90 88 87 84 83\n84 82 79 76 74 73 71\n67 64 62 60 59\n45 42 40 38 36 34\n99 96 93 91 90\n39 40 43 45 47 48 50\n83 80 77 76 75 74 73\n5 7 8 9 10 12\n67 69 71 72 73\n37 38 40 41 43 46 47\n30 33 36 39 41 44 45 48\n96 95 94 93 91 88 85 82\n61 63 64 65 68\n44 46 47 50 51 52\n72 74 77 80 83 84 85\n73 71 69 68 66 64\n47 44 42 41 40 38\n36 39 42 44 47\n92 91 88 87 86 84 82\n57 58 60 62 65\n61 63 65 68 69 72\n29 28 26 24 21 19 16 15\n77 80 81 83 86 87 88 91\n29 30 31 32 34 35 38\n40 42 43 45 47\n54 51 50 49 48 46 44 41\n46 48 49 50 53\n55 53 52 51 48 46 43 41\n64 63 62 59 58\n46 49 51 53 56 57 60\n98 97 94 92 90 87 86\n28 25 22 21 18 15 14\n25 22 21 20 17 16\n49 51 53 55 58\n34 32 29 27 25 24 21\n74 71 68 65 64 63 61\n26 29 31 32 34 35 37\n84 85 88 89 92 94 96\n22 19 17 14 13\n4 6 7 10 11 13\n69 67 66 63 62 59\n12 11 8 5 4\n1 4 6 8 9 11 14 15\n23 25 27 29 32\n68 70 72 73 74\n38 35 34 32 29 27 25\n72 69 66 65 63 62 59 56\n68 71 72 75 76 79\n39 41 42 43 44 47 50\n81 78 75 72 69 66 64\n82 85 86 89 92 93 95 97\n65 67 68 70 71\n93 91 90 87 85 83 82\n97 94 93 90 87 84 82 80\n65 67 70 71 74 77\n24 22 20 17 14 12 9\n34 31 29 26 25 24\n23 24 27 29 30 31\n65 68 71 72 74\n51 50 47 46 45 44 41\n92 90 87 86 85\n28 29 32 33 35 37\n30 28 26 23 22 20 19\n14 17 18 19 22 24 26 29\n49 51 54 55 56 58\n54 56 57 58 61 63 66 69\n31 33 36 38 41\n80 81 84 86 87 88 91 92\n60 58 57 56 53 50 49\n73 71 68 65 63 60 59\n49 51 53 54 57 60 61 64\n29 27 25 22 21 18 17 15\n73 70 67 64 63 62\n53 56 58 61 63 64\n41 39 36 34 32 29 28 26\n18 15 12 10 9 6\n17 18 21 23 25 28 31 34\n47 45 42 39 36 35 33\n90 88 85 82 81 78 76 74\n15 13 12 10 8 6\n66 65 64 62 61\n99 97 94 93 91 88 87 86\n62 59 57 55 53\n23 26 28 29 31\n71 70 68 65 62 59 58\n25 27 30 32 34 36 38 41\n75 78 81 82 83 84\n79 77 75 73 71 68\n87 84 81 80 77 76 75 74\n66 67 68 69 71 72 75\n6 9 11 12 13 15\n87 86 83 80 77 76 73 70\n28 27 25 23 20 19 18\n49 48 47 44 42\n15 14 12 11 10 7 5\n34 35 36 39 41 42 44 45\n58 57 55 52 51\n59 57 55 54 51 50 49 48\n19 16 15 13 10 8\n60 61 63 64 66 68\n48 51 53 55 56 58 60 63\n46 44 43 42 40 38\n97 96 93 91 88 85 82 81\n39 42 45 47 50 52 54\n15 12 9 7 6 3\n71 72 73 75 77\n64 63 62 59 57 56\n60 58 55 52 51 49 46 44\n63 66 68 70 73 74 75 77\n16 19 22 23 25 27 29\n55 56 59 60 61 62 63\n86 84 83 80 79 77\n32 34 37 39 40 41 44 45\n38 40 41 43 44 47 48 49\n19 18 15 14 11\n70 71 74 75 77\n28 25 22 21 20 19 16\n84 85 88 89 90\n85 88 89 91 93 94 97\n75 72 69 68 65\n37 35 34 32 29 28 27 26\n44 42 41 39 37 36 34\n13 11 9 8 6 4\n32 29 26 24 21\n60 59 58 55 52 49\n45 46 48 51 52 53 56 58\n35 38 41 44 46\n53 51 48 47 45 44 42 39\n94 91 90 87 84 82\n4 6 7 8 11 13 16 19\n94 92 90 87 86 83 81 79\n82 79 76 75 72\n87 90 91 93 95 96 98\n40 43 46 48 51 53 56 58\n23 22 21 18 16 15 13 10\n69 70 72 73 76 78 79\n73 72 70 67 64 63\n31 28 25 24 21\n73 75 78 81 84\n89 86 84 82 79 78 77 75\n33 35 37 40 42 45 47 49\n71 74 77 78 79 81\n44 46 48 51 54\n53 50 49 47 44 42 39\n39 40 42 45 46\n70 73 76 77 79 81 83 86\n3 5 8 10 13 14 15\n28 31 32 34 36 38\n65 63 62 60 59 56\n28 30 31 34 37 39\n82 80 77 75 73 72 69 67\n41 40 39 37 36 33 31\n93 91 89 87 86\n33 32 29 27 24 23\n65 67 68 71 72 73 74 75\n49 51 52 53 55 57\n2 3 5 7 9 10 12\n52 49 47 46 44\n66 67 68 70 73 74\n57 55 53 51 50\n32 33 36 38 39 42\n59 61 64 65 68 70 71\n33 34 36 37 38 39 42\n56 59 61 64 65 66 68\n36 33 30 28 26\n96 94 92 89 87 84\n50 48 45 43 40 38\n65 63 60 59 56 53\n69 71 72 75 76 77 80\n42 41 38 35 33 31 28 26\n67 65 62 60 58 55\n97 96 94 92 89\n11 12 15 16 19 20 22 25\n83 85 88 91 93\n87 85 83 80 77 75\n40 42 44 45 47 50 53 55\n86 83 81 78 76 74 71 68\n6 7 8 10 11 13 14\n83 82 81 80 78 76\n72 75 77 78 79\n93 90 89 88 85 82 79\n64 67 70 71 72 75 78 81\n11 12 13 15 18\n');
var $elm$core$String$lines = _String_lines;
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
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$core$String$toInt = _String_toInt;
var $author$project$Year2024$Day02$parseLine = function (line) {
	return A2(
		$elm$core$List$filterMap,
		$elm$core$String$toInt,
		A2($elm$core$String$split, ' ', line));
};
var $author$project$Year2024$Day02$parse1 = function (string) {
	return A2(
		$elm$core$List$map,
		$author$project$Year2024$Day02$parseLine,
		$elm$core$String$lines(string));
};
var $author$project$Year2024$Day02$parse2 = function (string) {
	return $author$project$Year2024$Day02$parse1(string);
};
var $elm$core$Debug$log = _Debug_log;
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
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$map2 = _List_map2;
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
var $author$project$Year2024$Day02$tests1 = _List_Nil;
var $author$project$Advent$Test = F4(
	function (description, input, expectedParsedInput, expectedOutput) {
		return {description: description, expectedOutput: expectedOutput, expectedParsedInput: expectedParsedInput, input: input};
	});
var $author$project$Year2024$Day02$tests2 = _List_fromArray(
	[
		A4(
		$author$project$Advent$Test,
		'line works',
		'7 6 4 2 1',
		$elm$core$Maybe$Just(
			_List_fromArray(
				[
					_List_fromArray(
					[7, 6, 4, 2, 1])
				])),
		1),
		A4(
		$author$project$Advent$Test,
		'line doesnt work',
		'1 2 7 8 9',
		$elm$core$Maybe$Just(
			_List_fromArray(
				[
					_List_fromArray(
					[1, 2, 7, 8, 9])
				])),
		0),
		A4(
		$author$project$Advent$Test,
		'line works only with removing',
		'8 6 4 4 1',
		$elm$core$Maybe$Just(
			_List_fromArray(
				[
					_List_fromArray(
					[8, 6, 4, 4, 1])
				])),
		1),
		A4(
		$author$project$Advent$Test,
		'line works only with removing2',
		'1 3 2 4 5',
		$elm$core$Maybe$Just(
			_List_fromArray(
				[
					_List_fromArray(
					[1, 3, 2, 4, 5])
				])),
		1),
		A4(
		$author$project$Advent$Test,
		'line works only with removing2',
		'8 3 4 5',
		$elm$core$Maybe$Just(
			_List_fromArray(
				[
					_List_fromArray(
					[8, 3, 4, 5])
				])),
		1)
	]);
var $author$project$Year2024$Day02$main = $author$project$Advent$program(
	{compute1: $author$project$Year2024$Day02$compute1, compute2: $author$project$Year2024$Day02$compute2, input: $author$project$Year2024$Day02$input_, parse1: $author$project$Year2024$Day02$parse1, parse2: $author$project$Year2024$Day02$parse2, tests1: $author$project$Year2024$Day02$tests1, tests2: $author$project$Year2024$Day02$tests2});
_Platform_export({'Year2024':{'Day02':{'init':$author$project$Year2024$Day02$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}}});}(this));let oldLog=console.log;console.log=function(...args){let x=args[0];if(x.startsWith('[START]')){console.time('time');}else if(x.startsWith('[LOG]')){console.timeLog('time');}else if(x.startsWith('[END]')){console.timeEnd('time');}else{oldLog(...args);}}
this.Elm.Year2024.Day02.init();
