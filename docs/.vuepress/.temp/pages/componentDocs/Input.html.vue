<template><div><h1 id="input输入框" tabindex="-1"><a class="header-anchor" href="#input输入框" aria-hidden="true">#</a> Input输入框</h1>
<h4 id="常用-input-输入框" tabindex="-1"><a class="header-anchor" href="#常用-input-输入框" aria-hidden="true">#</a> 常用 Input 输入框</h4>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<h4 id="带有导航的input" tabindex="-1"><a class="header-anchor" href="#带有导航的input" aria-hidden="true">#</a> 带有导航的Input</h4>
<br/>
<Input-TypeSearch></Input-TypeSearch>
<br/>
<details>
<div class="language-vue" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TypeSearch</span>
    <span class="token attr-name">:typeList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>typeList<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>activeValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeValue<span class="token punctuation">"</span></span>
    <span class="token attr-name">@changeClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeClick<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>searchValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchValue<span class="token punctuation">"</span></span>
    <span class="token attr-name">@searchClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchClick<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TypeSearch</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> typeList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"选项1"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"选项2"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"选项3"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> activeValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> searchValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">searchClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div><summary>查看代码</summary>
</details>
<br/>
<h2 id="贡献者" tabindex="-1"><a class="header-anchor" href="#贡献者" aria-hidden="true">#</a> 贡献者</h2>
<div>
  <img  style='width:50px;border-radius: 9999px;vertical-align: middle;margin-right: 10px;border: 1px ghostwhite solid;' src="https://avatars.githubusercontent.com/u/78008994?v=4"/>
  <a href="https://github.com/ITAurora">Win</a>
</div></div></template>


