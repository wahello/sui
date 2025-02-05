(function() {var type_impls = {
"sui_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3C%5Bu8%5D%3E-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-AsRef%3C%5Bu8%5D%3E-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>]&gt; for BLS12381KeyPair</h3></section></summary><div class=\"docblock\"><p>The bytes form of the keypair only contain the private key bytes</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<[u8]>","sui_types::crypto::AuthorityKeyPair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-Debug-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for BLS12381KeyPair</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_types::crypto::AuthorityKeyPair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for BLS12381KeyPair</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(\n    deserializer: D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;BLS12381KeyPair, &lt;D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sui_types::crypto::AuthorityKeyPair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CBLS12381PrivateKey%3E-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-From%3CBLS12381PrivateKey%3E-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;BLS12381PrivateKey&gt; for BLS12381KeyPair</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(private: BLS12381PrivateKey) -&gt; BLS12381KeyPair</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<BLS12381PrivateKey>","sui_types::crypto::AuthorityKeyPair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromStr-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-FromStr-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/str/traits/trait.FromStr.html\" title=\"trait core::str::traits::FromStr\">FromStr</a> for BLS12381KeyPair</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Err\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Err\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.81.0/core/str/traits/trait.FromStr.html#associatedtype.Err\" class=\"associatedtype\">Err</a> = FastCryptoError</h4></section></summary><div class='docblock'>The associated error which can be returned from parsing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_str\" class=\"method trait-impl\"><a href=\"#method.from_str\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/str/traits/trait.FromStr.html#tymethod.from_str\" class=\"fn\">from_str</a>(\n    s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.str.html\">str</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;BLS12381KeyPair, &lt;BLS12381KeyPair as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/str/traits/trait.FromStr.html\" title=\"trait core::str::traits::FromStr\">FromStr</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.81.0/core/str/traits/trait.FromStr.html#associatedtype.Err\" title=\"type core::str::traits::FromStr::Err\">Err</a>&gt;</h4></section></summary><div class='docblock'>Parses a string <code>s</code> to return a value of this type. <a href=\"https://doc.rust-lang.org/1.81.0/core/str/traits/trait.FromStr.html#tymethod.from_str\">Read more</a></div></details></div></details>","FromStr","sui_types::crypto::AuthorityKeyPair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-KeyPair-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-KeyPair-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"sui_types/crypto/trait.KeypairTraits.html\" title=\"trait sui_types::crypto::KeypairTraits\">KeyPair</a> for BLS12381KeyPair</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.PubKey\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.PubKey\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sui_types/crypto/trait.KeypairTraits.html#associatedtype.PubKey\" class=\"associatedtype\">PubKey</a> = BLS12381PublicKey</h4></section><section id=\"associatedtype.PrivKey\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.PrivKey\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sui_types/crypto/trait.KeypairTraits.html#associatedtype.PrivKey\" class=\"associatedtype\">PrivKey</a> = BLS12381PrivateKey</h4></section><section id=\"associatedtype.Sig\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Sig\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sui_types/crypto/trait.KeypairTraits.html#associatedtype.Sig\" class=\"associatedtype\">Sig</a> = BLS12381Signature</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.public\" class=\"method trait-impl\"><a href=\"#method.public\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_types/crypto/trait.KeypairTraits.html#tymethod.public\" class=\"fn\">public</a>(&amp;self) -&gt; &amp;&lt;BLS12381KeyPair as <a class=\"trait\" href=\"sui_types/crypto/trait.KeypairTraits.html\" title=\"trait sui_types::crypto::KeypairTraits\">KeyPair</a>&gt;::<a class=\"associatedtype\" href=\"sui_types/crypto/trait.KeypairTraits.html#associatedtype.PubKey\" title=\"type sui_types::crypto::KeypairTraits::PubKey\">PubKey</a></h4></section></summary><div class='docblock'>Get the public key.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.private\" class=\"method trait-impl\"><a href=\"#method.private\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_types/crypto/trait.KeypairTraits.html#tymethod.private\" class=\"fn\">private</a>(self) -&gt; &lt;BLS12381KeyPair as <a class=\"trait\" href=\"sui_types/crypto/trait.KeypairTraits.html\" title=\"trait sui_types::crypto::KeypairTraits\">KeyPair</a>&gt;::<a class=\"associatedtype\" href=\"sui_types/crypto/trait.KeypairTraits.html#associatedtype.PrivKey\" title=\"type sui_types::crypto::KeypairTraits::PrivKey\">PrivKey</a></h4></section></summary><div class='docblock'>Get the private key.</div></details><section id=\"method.copy\" class=\"method trait-impl\"><a href=\"#method.copy\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_types/crypto/trait.KeypairTraits.html#tymethod.copy\" class=\"fn\">copy</a>(&amp;self) -&gt; BLS12381KeyPair</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.generate\" class=\"method trait-impl\"><a href=\"#method.generate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_types/crypto/trait.KeypairTraits.html#tymethod.generate\" class=\"fn\">generate</a>&lt;R&gt;(rng: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;mut R</a>) -&gt; BLS12381KeyPair<div class=\"where\">where\n    R: AllowedRng,</div></h4></section></summary><div class='docblock'>Generate a new keypair using the given RNG.</div></details></div></details>","KeyPair","sui_types::crypto::AuthorityKeyPair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-PartialEq-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for BLS12381KeyPair</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;BLS12381KeyPair) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/cmp.rs.html#262\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","sui_types::crypto::AuthorityKeyPair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-Serialize-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for BLS12381KeyPair</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(\n    &amp;self,\n    serializer: S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sui_types::crypto::AuthorityKeyPair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Signer%3CBLS12381Signature%3E-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-Signer%3CBLS12381Signature%3E-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"sui_types/crypto/trait.Signer.html\" title=\"trait sui_types::crypto::Signer\">Signer</a>&lt;BLS12381Signature&gt; for BLS12381KeyPair</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.sign\" class=\"method trait-impl\"><a href=\"#method.sign\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_types/crypto/trait.Signer.html#tymethod.sign\" class=\"fn\">sign</a>(&amp;self, msg: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>]) -&gt; BLS12381Signature</h4></section></summary><div class='docblock'>Create a new signature over a message.</div></details></div></details>","Signer<BLS12381Signature>","sui_types::crypto::AuthorityKeyPair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToFromBytes-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-ToFromBytes-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"sui_types/crypto/trait.ToFromBytes.html\" title=\"trait sui_types::crypto::ToFromBytes\">ToFromBytes</a> for BLS12381KeyPair</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_bytes\" class=\"method trait-impl\"><a href=\"#method.from_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_types/crypto/trait.ToFromBytes.html#tymethod.from_bytes\" class=\"fn\">from_bytes</a>(bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;BLS12381KeyPair, FastCryptoError&gt;</h4></section></summary><div class='docblock'>Parse an object from its byte representation</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_bytes\" class=\"method trait-impl\"><a href=\"#method.as_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_types/crypto/trait.ToFromBytes.html#method.as_bytes\" class=\"fn\">as_bytes</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class='docblock'>Borrow a byte slice representing the serialized form of this object</div></details></div></details>","ToFromBytes","sui_types::crypto::AuthorityKeyPair"],["<section id=\"impl-Eq-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-Eq-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for BLS12381KeyPair</h3></section>","Eq","sui_types::crypto::AuthorityKeyPair"],["<section id=\"impl-StructuralPartialEq-for-BLS12381KeyPair\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-BLS12381KeyPair\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for BLS12381KeyPair</h3></section>","StructuralPartialEq","sui_types::crypto::AuthorityKeyPair"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()