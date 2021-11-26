(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'kotlin-wrappers-kotlin-react-dom-js-legacy', 'kotlin-wrappers-kotlin-react-js-legacy', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('kotlin-wrappers-kotlin-react-dom-js-legacy'), require('kotlin-wrappers-kotlin-react-js-legacy'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Reack_and_webpack'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Reack_and_webpack'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'Reack_and_webpack'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'Reack_and_webpack'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Reack_and_webpack'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-legacy' is loaded prior to 'Reack_and_webpack'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Reack_and_webpack'. Its dependency 'kotlin-wrappers-kotlin-react-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-legacy' is loaded prior to 'Reack_and_webpack'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'Reack_and_webpack'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'Reack_and_webpack'.");
    }root.Reack_and_webpack = factory(typeof Reack_and_webpack === 'undefined' ? {} : Reack_and_webpack, kotlin, this['kotlinx-coroutines-core'], this['kotlin-wrappers-kotlin-react-dom-js-legacy'], this['kotlin-wrappers-kotlin-react-js-legacy'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$kotlin_wrappers_kotlin_react_dom_js_legacy, $module$kotlin_wrappers_kotlin_react_js_legacy, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var RDOMBuilder = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.RDOMBuilder;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.render_2955dm$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var throwCCE = Kotlin.throwCCE;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var RComponent_init_0 = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent_init_8bz2yq$;
  var enumEncode = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  Welcome.prototype = Object.create(RComponent.prototype);
  Welcome.prototype.constructor = Welcome;
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function App() {
    RComponent_init(this);
  }
  App.prototype.init_bc6fkx$ = function ($receiver) {
    var mainScope = MainScope();
  };
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('KotlinConf Explorer');
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(h3$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$('Videos to watch');
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(h3$lambda(null));
    $receiver_0_2.unaryPlus_pdl1vz$('Videos watched');
    $receiver_0_0.child_52psg1$($receiver_0_2.create());
    $receiver.child_52psg1$($receiver_0_0.create());
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'Kotlin/JS';
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.attrs_slhiwc$(main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(Welcome), main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda(it) {
    render(document.getElementById('root'), void 0, main$lambda$lambda);
    return Unit;
  }
  function main() {
    window.onload = main$lambda;
  }
  function main$lambda$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda_0($receiver) {
    $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda_0);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda_0);
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function WelcomeState(name) {
    this.name = name;
  }
  WelcomeState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WelcomeState',
    interfaces: []
  };
  WelcomeState.prototype.component1 = function () {
    return this.name;
  };
  WelcomeState.prototype.copy_61zpoe$ = function (name) {
    return new WelcomeState(name === void 0 ? this.name : name);
  };
  WelcomeState.prototype.toString = function () {
    return 'WelcomeState(name=' + Kotlin.toString(this.name) + ')';
  };
  WelcomeState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  WelcomeState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Welcome(props) {
    RComponent_init_0(props, this);
    this.state = new WelcomeState(props.name);
  }
  function Welcome$render$lambda$lambda$lambda(this$Welcome) {
    return function (event) {
      var tmp$, tmp$_0;
      tmp$_0 = new WelcomeState((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      this$Welcome.setState(tmp$_0);
      return Unit;
    };
  }
  Welcome.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_0(null));
    $receiver_0.unaryPlus_pdl1vz$('Hello, ' + this.state.name);
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
    var $receiver_1 = $receiver_0_0.attrs;
    $receiver_1.type = InputType.text;
    $receiver_1.value = this.state.name;
    set_onChangeFunction($receiver_1, Welcome$render$lambda$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0_0.create());
  };
  Welcome.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Welcome',
    interfaces: [RComponent]
  };
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-js-legacy'] = $module$kotlin_wrappers_kotlin_react_dom_js_legacy;
  _.App = App;
  _.main = main;
  _.WelcomeState = WelcomeState;
  _.Welcome = Welcome;
  main();
  Kotlin.defineModule('Reack_and_webpack', _);
  return _;
}));

//# sourceMappingURL=Reack_and_webpack.js.map
