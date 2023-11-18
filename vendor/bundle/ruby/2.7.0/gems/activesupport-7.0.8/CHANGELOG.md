## Rails 7.0.8 (September 09, 2023)

- Fix `TimeWithZone` still using deprecated `#to_s` when `ENV` or `config` to
  disable it are set.

  _Hartley McGuire_

- Fix CacheStore#write_multi when using a distributed Redis cache with a connection pool.

  Fixes [#48938](https://github.com/rails/rails/issues/48938).

  _Jonathan del Strother_

## Rails 7.0.7.2 (August 22, 2023)

- No changes.

## Rails 7.0.7.1 (August 22, 2023)

- Use a temporary file for storing unencrypted files while editing

  [CVE-2023-38037]

## Rails 7.0.7 (August 09, 2023)

- Fix `Cache::NullStore` with local caching for repeated reads.

  _fatkodima_

- Fix `to_s` with no arguments not respecting custom `:default` formats

  _Hartley McGuire_

- Fix `ActiveSupport::Inflector.humanize(nil)` raising `` NoMethodError: undefined method `end_with?' for nil:NilClass ``.

  _James Robinson_

- Fix `Enumerable#sum` for `Enumerator#lazy`.

  _fatkodima_, _Matthew Draper_, _Jonathan Hefner_

- Improve error message when EventedFileUpdateChecker is used without a
  compatible version of the Listen gem

  _Hartley McGuire_

## Rails 7.0.6 (June 29, 2023)

- Fix `EncryptedConfiguration` returning incorrect values for some `Hash`
  methods

  _Hartley McGuire_

- Fix arguments being destructed `Enumerable#many?` with block.

  _Andrew Novoselac_

- Fix humanize for strings ending with id.

  _fatkodima_

## Rails 7.0.5.1 (June 26, 2023)

- No changes.

## Rails 7.0.5 (May 24, 2023)

- Fixes TimeWithZone ArgumentError.

  _Niklas Häusele_

## Rails 7.0.4.3 (March 13, 2023)

- Implement SafeBuffer#bytesplice

  [CVE-2023-28120]

## Rails 7.0.4.2 (January 24, 2023)

- No changes.

## Rails 7.0.4.1 (January 17, 2023)

- Avoid regex backtracking in Inflector.underscore

  [CVE-2023-22796]

## Rails 7.0.4 (September 09, 2022)

- Ensure `ActiveSupport::Testing::Isolation::Forking` closes pipes

  Previously, `Forking.run_in_isolation` opened two ends of a pipe. The fork
  process closed the read end, wrote to it, and then terminated (which
  presumably closed the file descriptors on its end). The parent process
  closed the write end, read from it, and returned, never closing the read
  end.

  This resulted in an accumulation of open file descriptors, which could
  cause errors if the limit is reached.

  _Sam Bostock_

- Redis cache store is now compatible with redis-rb 5.0.

  _Jean Boussier_

- Fix `NoMethodError` on custom `ActiveSupport::Deprecation` behavior.

  `ActiveSupport::Deprecation.behavior=` was supposed to accept any object
  that responds to `call`, but in fact its internal implementation assumed that
  this object could respond to `arity`, so it was restricted to only `Proc` objects.

  This change removes this `arity` restriction of custom behaviors.

  _Ryo Nakamura_

## Rails 7.0.3.1 (July 12, 2022)

- No changes.

## Rails 7.0.3 (May 09, 2022)

- No changes.

## Rails 7.0.2.4 (April 26, 2022)

- Fix and add protections for XSS in `ActionView::Helpers` and `ERB::Util`.

  Add the method `ERB::Util.xml_name_escape` to escape dangerous characters
  in names of tags and names of attributes, following the specification of XML.

  _Álvaro Martín Fraguas_

## Rails 7.0.2.3 (March 08, 2022)

- No changes.

## Rails 7.0.2.2 (February 11, 2022)

- Fix Reloader method signature to work with the new Executor signature

## Rails 7.0.2.1 (February 11, 2022)

- No changes.

## Rails 7.0.2 (February 08, 2022)

- Fix `ActiveSupport::EncryptedConfiguration` to be compatible with Psych 4

  _Stephen Sugden_

- Improve `File.atomic_write` error handling.

  _Daniel Pepper_

## Rails 7.0.1 (January 06, 2022)

- Fix `Class#descendants` and `DescendantsTracker#descendants` compatibility with Ruby 3.1.

  [The native `Class#descendants` was reverted prior to Ruby 3.1 release](https://bugs.ruby-lang.org/issues/14394#note-33),
  but `Class#subclasses` was kept, breaking the feature detection.

  _Jean Boussier_

## Rails 7.0.0 (December 15, 2021)

- Fix `ActiveSupport::Duration.build` to support negative values.

  The algorithm to collect the `parts` of the `ActiveSupport::Duration`
  ignored the sign of the `value` and accumulated incorrect part values. This
  impacted `ActiveSupport::Duration#sum` (which is dependent on `parts`) but
  not `ActiveSupport::Duration#eql?` (which is dependent on `value`).

  _Caleb Buxton_, _Braden Staudacher_

## Rails 7.0.0.rc3 (December 14, 2021)

- No changes.

## Rails 7.0.0.rc2 (December 14, 2021)

- No changes.

## Rails 7.0.0.rc1 (December 06, 2021)

- Deprecate passing a format to `#to_s` in favor of `#to_formatted_s` in `Array`, `Range`, `Date`, `DateTime`, `Time`,
  `BigDecimal`, `Float` and, `Integer`.

  _Rafael Mendonça França_

- Document `ActiveSupport::Testing::Deprecation`.

  _Sam Bostock & Sam Jordan_

- Add `Pathname#existence`.

  ```ruby
  Pathname.new("file").existence&.read
  ```

  _Timo Schilling_

- Remove deprecate `ActiveSupport::Multibyte::Unicode.default_normalization_form`.

  _Rafael Mendonça França_

- Remove deprecated support to use `Range#include?` to check the inclusion of a value in
  a date time range is deprecated.

  _Rafael Mendonça França_

- Remove deprecated `URI.parser`.

  _Rafael Mendonça França_

- Remove deprecated `config.active_support.use_sha1_digests`.

  _Rafael Mendonça França_

- Invoking `Object#with_options` without a `&block` argument returns the
  `ActiveSupport::OptionMerger` instance.

  _Sean Doyle_

- `Rails.application.executor` hooks can now be called around every test

  This helps to better simulate request or job local state being reset around tests and prevents state
  leaking from one test to another.

  However it requires the executor hooks executed in the test environment to be re-entrant.

  To enable this, set `config.active_support.executor_around_test_case = true` (this is the default in Rails 7).

  _Jean Boussier_

- `ActiveSupport::DescendantsTracker` now mostly delegate to `Class#descendants` on Ruby 3.1

  Ruby now provides a fast `Class#descendants` making `ActiveSupport::DescendantsTracker` mostly useless.

  As a result the following methods are deprecated:

  - `ActiveSupport::DescendantsTracker.direct_descendants`
  - `ActiveSupport::DescendantsTracker#direct_descendants`

  _Jean Boussier_

- Fix the `Digest::UUID.uuid_from_hash` behavior for namespace IDs that are different from the ones defined on `Digest::UUID`.

  The new behavior will be enabled by setting the
  `config.active_support.use_rfc4122_namespaced_uuids` option to `true`
  and is the default for new apps.

  The old behavior is the default for upgraded apps and will output a
  deprecation warning every time a value that is different than one of
  the constants defined on the `Digest::UUID` extension is used as the
  namespace ID.

  _Alex Robbin_, _Erich Soares Machado_, _Eugene Kenny_

- `ActiveSupport::Inflector::Inflections#clear(:acronyms)` is now supported,
  and `inflector.clear` / `inflector.clear(:all)` also clears acronyms.

  _Alex Ghiculescu_, _Oliver Peate_

## Rails 7.0.0.alpha2 (September 15, 2021)

- No changes.

## Rails 7.0.0.alpha1 (September 15, 2021)

- `ActiveSupport::Dependencies` no longer installs a `const_missing` hook. Before this, you could push to the autoload paths and have constants autoloaded. This feature, known as the `classic` autoloader, has been removed.

  _Xavier Noria_

- Private internal classes of `ActiveSupport::Dependencies` have been deleted, like `ActiveSupport::Dependencies::Reference`, `ActiveSupport::Dependencies::Blamable`, and others.

  _Xavier Noria_

- The private API of `ActiveSupport::Dependencies` has been deleted. That includes methods like `hook!`, `unhook!`, `depend_on`, `require_or_load`, `mechanism`, and many others.

  _Xavier Noria_

- Improves the performance of `ActiveSupport::NumberHelper` formatters by avoiding the use of exceptions as flow control.

  _Mike Dalessio_

- Removed rescue block from `ActiveSupport::Cache::RedisCacheStore#handle_exception`

  Previously, if you provided a `error_handler` to `redis_cache_store`, any errors thrown by
  the error handler would be rescued and logged only. Removed the `rescue` clause from `handle_exception`
  to allow these to be thrown.

  _Nicholas A. Stuart_

- Allow entirely opting out of deprecation warnings.

  Previously if you did `app.config.active_support.deprecation = :silence`, some work would
  still be done on each call to `ActiveSupport::Deprecation.warn`. In very hot paths, this could
  cause performance issues.

  Now, you can make `ActiveSupport::Deprecation.warn` a no-op:

  ```ruby
  config.active_support.report_deprecations = false
  ```

  This is the default in production for new apps. It is the equivalent to:

  ```ruby
  config.active_support.deprecation = :silence
  config.active_support.disallowed_deprecation = :silence
  ```

  but will take a more optimised code path.

  _Alex Ghiculescu_

- Faster tests by parallelizing only when overhead is justified by the number
  of them.

  Running tests in parallel adds overhead in terms of database
  setup and fixture loading. Now, Rails will only parallelize test executions when
  there are enough tests to make it worth it.

  This threshold is 50 by default, and is configurable via config setting in
  your test.rb:

  ```ruby
  config.active_support.test_parallelization_threshold = 100
  ```

  It's also configurable at the test case level:

  ```ruby
  class ActiveSupport::TestCase
    parallelize threshold: 100
  end
  ```

  _Jorge Manrubia_

- OpenSSL constants are now used for Digest computations.

  _Dirkjan Bussink_

- `TimeZone.iso8601` now accepts valid ordinal values similar to Ruby's `Date._iso8601` method.
  A valid ordinal value will be converted to an instance of `TimeWithZone` using the `:year`
  and `:yday` fragments returned from `Date._iso8601`.

  ```ruby
  twz = ActiveSupport::TimeZone["Eastern Time (US & Canada)"].iso8601("21087")
  twz.to_a[0, 6] == [0, 0, 0, 28, 03, 2021]
  ```

  _Steve Laing_

- `Time#change` and methods that call it (e.g. `Time#advance`) will now
  return a `Time` with the timezone argument provided, if the caller was
  initialized with a timezone argument.

  Fixes [#42467](https://github.com/rails/rails/issues/42467).

  _Alex Ghiculescu_

- Allow serializing any module or class to JSON by name.

  _Tyler Rick_, _Zachary Scott_

- Raise `ActiveSupport::EncryptedFile::MissingKeyError` when the
  `RAILS_MASTER_KEY` environment variable is blank (e.g. `""`).

  _Sunny Ripert_

- The `from:` option is added to `ActiveSupport::TestCase#assert_no_changes`.

  It permits asserting on the initial value that is expected not to change.

  ```ruby
  assert_no_changes -> { Status.all_good? }, from: true do
    post :create, params: { status: { ok: true } }
  end
  ```

  _George Claghorn_

- Deprecate `ActiveSupport::SafeBuffer`'s incorrect implicit conversion of objects into string.

  Except for a few methods like `String#%`, objects must implement `#to_str`
  to be implicitly converted to a String in string operations. In some
  circumstances `ActiveSupport::SafeBuffer` was incorrectly calling the
  explicit conversion method (`#to_s`) on them. This behavior is now
  deprecated.

  _Jean Boussier_

- Allow nested access to keys on `Rails.application.credentials`.

  Previously only top level keys in `credentials.yml.enc` could be accessed with method calls. Now any key can.

  For example, given these secrets:

  ```yml
  aws:
    access_key_id: 123
    secret_access_key: 345
  ```

  `Rails.application.credentials.aws.access_key_id` will now return the same thing as
  `Rails.application.credentials.aws[:access_key_id]`.

  _Alex Ghiculescu_

- Added a faster and more compact `ActiveSupport::Cache` serialization format.

  It can be enabled with `config.active_support.cache_format_version = 7.0` or
  `config.load_defaults 7.0`. Regardless of the configuration Active Support
  7.0 can read cache entries serialized by Active Support 6.1 which allows to
  upgrade without invalidating the cache. However Rails 6.1 can't read the
  new format, so all readers must be upgraded before the new format is enabled.

  _Jean Boussier_

- Add `Enumerable#sole`, per `ActiveRecord::FinderMethods#sole`. Returns the
  sole item of the enumerable, raising if no items are found, or if more than
  one is.

  _Asherah Connor_

- Freeze `ActiveSupport::Duration#parts` and remove writer methods.

  Durations are meant to be value objects and should not be mutated.

  _Andrew White_

- Fix `ActiveSupport::TimeZone#utc_to_local` with fractional seconds.

  When `utc_to_local_returns_utc_offset_times` is false and the time
  instance had fractional seconds the new UTC time instance was out by
  a factor of 1,000,000 as the `Time.utc` constructor takes a usec
  value and not a fractional second value.

  _Andrew White_

- Add `expires_at` argument to `ActiveSupport::Cache` `write` and `fetch` to set a cache entry TTL as an absolute time.

  ```ruby
  Rails.cache.write(key, value, expires_at: Time.now.at_end_of_hour)
  ```

  _Jean Boussier_

- Deprecate `ActiveSupport::TimeWithZone.name` so that from Rails 7.1 it will use the default implementation.

  _Andrew White_

- Deprecates Rails custom `Enumerable#sum` and `Array#sum` in favor of Ruby's native implementation which
  is considerably faster.

  Ruby requires an initializer for non-numeric type as per examples below:

  ```ruby
  %w[foo bar].sum('')
  # instead of %w[foo bar].sum

  [[1, 2], [3, 4, 5]].sum([])
  # instead of [[1, 2], [3, 4, 5]].sum
  ```

  _Alberto Mota_

- Tests parallelization is now disabled when running individual files to prevent the setup overhead.

  It can still be enforced if the environment variable `PARALLEL_WORKERS` is present and set to a value greater than 1.

  _Ricardo Díaz_

- Fix proxying keyword arguments in `ActiveSupport::CurrentAttributes`.

  _Marcin Kołodziej_

- Add `Enumerable#maximum` and `Enumerable#minimum` to easily calculate the maximum or minimum from extracted
  elements of an enumerable.

  ```ruby
  payments = [Payment.new(5), Payment.new(15), Payment.new(10)]

  payments.minimum(:price) # => 5
  payments.maximum(:price) # => 15
  ```

  This also allows passing enumerables to `fresh_when` and `stale?` in Action Controller.
  See PR [#41404](https://github.com/rails/rails/pull/41404) for an example.

  _Ayrton De Craene_

- `ActiveSupport::Cache::MemCacheStore` now accepts an explicit `nil` for its `addresses` argument.

  ```ruby
  config.cache_store = :mem_cache_store, nil

  # is now equivalent to

  config.cache_store = :mem_cache_store

  # and is also equivalent to

  config.cache_store = :mem_cache_store, ENV["MEMCACHE_SERVERS"] || "localhost:11211"

  # which is the fallback behavior of Dalli
  ```

  This helps those migrating from `:dalli_store`, where an explicit `nil` was permitted.

  _Michael Overmeyer_

- Add `Enumerable#in_order_of` to put an Enumerable in a certain order by a key.

  _DHH_

- `ActiveSupport::Inflector.camelize` behaves expected when provided a symbol `:upper` or `:lower` argument. Matches
  `String#camelize` behavior.

  _Alex Ghiculescu_

- Raises an `ArgumentError` when the first argument of `ActiveSupport::Notification.subscribe` is
  invalid.

  _Vipul A M_

- `HashWithIndifferentAccess#deep_transform_keys` now returns a `HashWithIndifferentAccess` instead of a `Hash`.

  _Nathaniel Woodthorpe_

- Consume dalli’s `cache_nils` configuration as `ActiveSupport::Cache`'s `skip_nil` when using `MemCacheStore`.

  _Ritikesh G_

- Add `RedisCacheStore#stats` method similar to `MemCacheStore#stats`. Calls `redis#info` internally.

  _Ritikesh G_

Please check [6-1-stable](https://github.com/rails/rails/blob/6-1-stable/activesupport/CHANGELOG.md) for previous changes.
