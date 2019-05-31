# Learning Gatsby Themes
1. What is a Gatsby Themes?
2. Who are the people responsibl?
3. What issue does Gatsby thee try to resolve?
4. What are good articles?
5. How easy are they to create?
6. Can a business model to set up around them?
7. Can gatsby themes be combined with netlify cms?
8. How easy can a theme be changed? 

- Starter consists of demo content and gatsby-config

http://worrydream.com/LadderOfAbstraction/

They can add configuration to a project, implement pages, provide components, and set up data sources to query in GraphQL. Themes can also introduce other “parent” themes and plugins.

Functionality is written as dependency and not baked into the project. Swap compatible themes, and compose then together.

- Idea Gatsby for the GDS

At its core, a Gatsby site is a combination of functionality centered around a single config file, gatsby-config.js

## TODO:
1. Use a basic theme Y
2. Adapt a basic theme Y
3. Build a theme Y
4. Document it. 
5. Use the spectrum chat. It is not too good at the moment unfortunately

## Example Theme
https://github.com/sw-yx/gatsby-theme-dev-blog
https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/
https://github.com/ChristopherBiscardi/gatsby-theme-examples
https://www.gatsbyjs.org/blog/2019-01-31-why-themes/


## TO USE A THEME
- set it in gastbsy config
- override the existing component with component shadowing.
- do not even need to use graphQL to override the theme. Once the theme is created you just use the same data model defined and override them, then they are the same. 
- **any** file can be replaced. 
- Progressive disclosure, you can add and add more cycle. Onboards you well
- 

"Gatsby themes allow you to focus only on the parts of the site and app building process that you need to care about by abstracting the rest away into a package." https://www.gatsbyjs.org/blog/2019-02-26-getting-started-with-gatsby-themes/

Reuse logic, 

Themes are one extra layer above the layer of abstraction. Writing themes allows those less technical to write and create websites.

Who are themes for?

    People new to Gatsby that want to get started quickly without a difficult learning curve

    People who have clear and common use-cases in mind for Gatsby (e.g. blog, ecommerce, documentation) and want to share the complexity of maintaining the underlying functionality with others — so pick a theme as the base for their site instead of starting from scratch

    OSS/Commercial entrepreneurs who want to create web products. Themes will enable them to assemble a product they can share or sell with others.

    Designers who want to create unique/beautiful website designs to share with others