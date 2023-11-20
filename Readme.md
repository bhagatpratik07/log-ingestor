## Log Ingestor System

A log ingestor system that efficiently handles vast volumes of log data and provides a simple interface for querying using full-text search or specific field filters.

### Log Ingestor:

- Mechanism to ingest logs in JSON format over HTTP.
- Scalable design to handle high log volumes efficiently.
- Mitigation of potential bottlenecks (I/O operations, database write speeds).
- Log data stored in MongoDB (MongoDB Atlas for cloud deployment).

### Query Interface:

- User interface for full-text search across logs.
- Filters based on log attributes (level, message, resourceId, timestamp, traceId, spanId, commit, metadata.parentResourceId).
- Efficient and quick search results.
- Integration with log storage system for fetching and displaying results.
