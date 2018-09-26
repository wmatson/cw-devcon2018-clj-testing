(ns reveal.libs)

(defn gh-lib-link [link]
  [:a {:href link} (re-find #"(?<=/)[^/]+$" link)])

(def libs-slides
  [:section
   [:h5 "Imagine the Possibilites"]
   [:section
    [:h3 (gh-lib-link "https://github.com/clojure/test.check")]
    [:p "Generative, property-based testing"]
    [:p "Great for round-trip tests"]
    [:p "Plays nice with " [:a {:href "https://clojure.org/guides/spec#_generators"} "clojure.spec"]]]
   [:section
    [:h3 (gh-lib-link "https://github.com/igrishaev/etaoin")]
    [:p "Like Selenium, but better"]
    [:p "Clojure wrapper around WebDrivers"]
    [:p "Well documented"]]
   [:section
    [:h3 (gh-lib-link "https://github.com/reifyhealth/specmonstah")]
    [:div {:style "display: flex; flex-direction: column"}
     [:img {:src "img/specmonstah_graph.png" :style "align-self: center"}]
     [:mini "Found on the Github README, MIT license"]]
    [:p "Creates test data"]
    [:p "Includes foreign key dependencies"]]
   [:section
    [:h3 "Miscellaneous"]
    [:p (gh-lib-link "https://github.com/cognitect-labs/transcriptor")]
    [:p [:a {:href "https://gist.github.com/plexus/a816a942c01b0e7af1e9836205100337"} "Clojure Testing Links"]]
    [:p [:a {:href "https://www.youtube.com/watch?v=r5i_OiZw6Sw"} "Testing Stateful and Concurrent Systems (Talk)"]]
    [:p [:a {:href "https://www.reddit.com/r/Clojure/"} "Clojure Subreddit"]]]])
