(ns reveal.interop)

(def maven-deps-xml "<dependency>
    <groupId>org.clojure</groupId>
    <artifactId>clojure</artifactId>
    <version>1.9.0</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.clojure</groupId>
    <artifactId>java.data</artifactId>
    <version>0.1.1</version>
    <scope>test</scope>
</dependency>
 
<!-- For use with repl -->
<dependency>
    <groupId>refactor-nrepl</groupId>
    <artifactId>refactor-nrepl</artifactId>
    <version>2.3.1</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.clojure</groupId>
    <artifactId>tools.nrepl</artifactId>
    <version>0.2.13</version>
    <scope>test</scope>
</dependency>")

(def maven-plugin-xml "<plugin>
    <groupId>com.theoryinpractise</groupId>
    <artifactId>clojure-maven-plugin</artifactId>
    <version>1.8.1</version>
    <executions>
        <execution>
            <id>test-clojure</id>
            <phase>test</phase>
            <goals>
                <goal>test</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
        <nreplMiddlewares>
            <middleware>cider.nrepl.middleware.apropos/wrap-apropos</middleware>
            <middleware>cider.nrepl.middleware.classpath/wrap-classpath</middleware>
            <middleware>cider.nrepl.middleware.complete/wrap-complete</middleware>
            <middleware>cider.nrepl.middleware.format/wrap-format</middleware>
            <middleware>cider.nrepl.middleware.info/wrap-info</middleware>
            <middleware>cider.nrepl.middleware.inspect/wrap-inspect</middleware>
            <middleware>cider.nrepl.middleware.macroexpand/wrap-macroexpand</middleware>
            <middleware>cider.nrepl.middleware.ns/wrap-ns</middleware>
            <middleware>cider.nrepl.middleware.pprint/wrap-pprint</middleware>
            <middleware>cider.nrepl.middleware.resource/wrap-resource</middleware>
            <middleware>cider.nrepl.middleware.stacktrace/wrap-stacktrace</middleware>
            <middleware>cider.nrepl.middleware.test/wrap-test</middleware>
            <middleware>cider.nrepl.middleware.trace/wrap-trace</middleware>
            <middleware>cider.nrepl.middleware.undef/wrap-undef</middleware>
        </nreplMiddlewares>
        <testSourceDirectories>
            <testSourceDirectory>src/test/clj</testSourceDirectory>
        </testSourceDirectories>
    </configuration>
</plugin>")

(def maven-repl-goal "mvn clojure:nrepl -D\"clojure.nrepl.handler\"=\"cider.nrepl/cider-nrepl-handler\"")

(defn escape-xml [xml]
  (clojure.string/replace xml #"<" "&lt;"))
  
(def interop-slides
  [:section
   [:h5 "Testing Java"]
   [:section
    [:h3 "Disclaimer"]
    [:p.fragment "Not a silver bullet"]
    [:p.fragment "Need testable design"]]
   [:section
    [:h3 "Requirements"]
    [:ul
     [:li "Access project's classes"]
     [:li "Run on build"]
     [:li "Allow REPL connection"]]]
   [:section
    [:p "Maven Dependencies"]
    [:aside.notes "Notice the test scope on all these dependencies"]
    [:pre.stretch {:style "font-size: 17.3px"}
     [:code (escape-xml maven-deps-xml)]]]
   [:section
    [:p "Clojure Maven Plugin"]
    [:pre.stretch {:style "font-size: 12.8px"}
     [:code.xml (escape-xml maven-plugin-xml)]]]
   [:section
    [:p "Maven REPL Command"]
    [:pre {:style "width: 51.5vw"}
     [:code maven-repl-goal]]
    [:p.fragment "'Normal' interop from here"]
    [:aside.notes "Libraries for auto-reloading of Java stuff, like virgil"]]
   [:section
    [:p "Mocking"]
    [:ul 
     [:li.fragment "Redesign"]
     [:li.fragment [:a {:href "https://clojuredocs.org/clojure.core/reify"}
                    [:code "reify"]]]
     [:li.fragment [:a {:href "https://clojuredocs.org/clojure.core/with-redefs"}
                    [:code "with-redefs"]]]
     [:li.fragment "Libraries"]]]
   [:section
    [:p "Data Management"]
    [:p "Clojure structures work as Java collections"]
    [:ul
     [:li.fragment "Wrapper functions/macros"]
     [:li.fragment [:a {:href "https://clojuredocs.org/clojure.core/bean"} "clojure.core/bean"]]
     [:li.fragment [:a {:href "https://github.com/clojure/java.data"} "clojure.java.data"]
      [:ul [:li "from-java & to-java"]]]
     [:li.fragment [:a {:href "https://github.com/uwcpdx/bean-dip"} "bean-dip"]]]]])
