## 如何写出优雅的代码

本文以 JavaScript 为例，介绍了该如何优化函数，使函数清晰易读，且更加高效稳定。

软件的复杂度一直在持续增长。代码质量对于保证应用的可靠性、易扩展性非常重要。

然而，几乎每一个开发者，包括我自己，在职业生涯中都见过低质量的代码。这东西就是个坑。

低质量代码具备以下极具杀伤力的特点：
- 函数超级长，而且塞满了各种乱七八糟的功能。
- 函数通常有一些副作用，不仅难以理解，甚至根本没法调试。
- 含糊的函数、变量命名。
- 脆弱的代码：一个小的变更，就有可能出乎意料的破坏其他应用组件。
- 代码覆盖率缺失。

它们听起来基本都是：“我根本没法理解这段代码是如何工作的”，“这段代码就是一堆乱麻”，“要修改这一段代码实在太难了” 等等。

我就曾遇到过这样的情况，我的一个同事由于无法继续将一个基于Ruby 的 REST API 做下去，继而离职。这个项目是他从之前的开发团队接手的。

修复现有的 bug ，然后引入了新的 bug，添加新的特性，就增加了一连串新 bug，如此循环（所谓的脆弱代码）。客户不希望以更好的设计重构整个应用，开发人员也做出明智的选择——维持现状。

好吧，这种事儿经常发生，而且挺糟糕的。那我们能做点什么呢？

首先，需要谨记于心：只是让应用运转起来，和尽心保证代码质量是两个完全不同的事。一方面，你需要实现产品需求。但是另一方面，你应该花点时间，确保函数功能简单、使用易读的变量和函数命名，避免函数的副作用等等。

函数（包括对象方法）是让应用运转起来的齿轮。首先你应当将注意力集中在他们的结构和整体布局上。

本项目包括了一些非常好的示例，展示如何编写清晰、易于理解和测试的函数。

### 1. 函数应当很小，非常小

避免使用包含大量的功能的大函数，应当将其功能分割为若干较小的函数。大的黑盒函数难于理解、修改，特别是很难测试。

### 2. 函数应当是简单的

让我们稍微放松一下，思考下应用的定义到底是什么？

每一个应用都需要实现一系列需求。开发人员的准则在于，将这些需求拆分为一些列较小的可执行组件（命名空间、类、函数、代码块等），分别完成指定的工作。

一个组件又由其他更小的组件构成。如果你希望编写一个组件，你只能从抽象层中低一级的组件中，选取需要的组件用于创建自己的组件。

换言之，你需要将一个函数分解为若干较小的步骤，并且保证这些步骤都在抽象上，处于同一级别，而且只向下抽象一级。这非常重要，因为这将使得函数变得简单，做到“做且只做好一件事”。

为什么这是必要的？因为简单的函数非常清晰。清晰就意味着易于理解和修改。


### 3. 使用简练的函数名称

函数名称应该非常简练：长短适中。理想情况下，名称应当清楚的概括函数的功用，而不需要读者深入了解函数的实现细节。

对于使用骆驼风格的函数名称，以小写字母开始： addItem()，saveToStore() 或者 getFirstName() 之类。

由于函数都是某种操作，因此名称中至少应当包含一个动词。例如 deletePage()，verifyCredentials()。需要 get 或 set 属性的时候，请使用 标准的 set 和 get 前缀：getLastName() 或 setLastName()。

避免在生产代码中出现有误导性的名称，例如 foo()，bar()，a()，fun() 等等。这样的名称没有任何意义。

如果函数都短小清晰，命名简练：代码读起来就会像诗一样迷人。

### 4. 总结

当然了，这里假定的例子都非常简单。现实中的代码更加复杂。你可能要抱怨，编写清晰的函数，只在抽象上一级一级下降，实在太没劲了。但是如果从项目一开始就开始你的实践，就远没有想象中复杂。

如果应用中已经存在一些功能繁杂的函数，希望对它们进行重构，你可能会发现困难重重。而且在很多情况下，在合理的时间内是不可能完成的。但千里之行始于足下：在力所能及的前提下，先拆分一部分出来。

当然，最正确的解决方案应该是，从项目一开始就以正确的方式实现应用。除了花一些时间在实现上，也应该花一些精力在组建合理的函数结构上：如我们所建议的——让它们保持短小、清晰。

    成竹在胸，落笔有神.

ES2015 实现了一个非常棒的模块系统，它明确建议，小函数是优秀的工程实践。

记住，干净、组织良好的代码通常需要投入大量时间。你会发现这做起来有难度。可能需要很多尝试，可能会迭代、修改一个函数很多次。

然而，没有什么比乱麻一样的代码更让人痛心的了，那么这一切都是值得的！